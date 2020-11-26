import Immutable from 'seamless-immutable';
import Reactotron, {overlay, trackGlobalErrors} from 'reactotron-react-native';
import apisaucePlugin from 'reactotron-apisauce';
import {reactotronRedux} from 'reactotron-redux';
import {NativeModules} from 'react-native';

// If you want to use a physical device and connect it to reactotron, execute first `adb reverse tcp:9090 tcp:9090`
if (__DEV__) {
  const {scriptURL} = NativeModules.SourceCode;
  const scriptHostname = scriptURL.split('://')[1].split(':')[0];
  Reactotron.configure({name: 'KinCartaChallenge', host: scriptHostname})
    .useReactNative()
    .use(trackGlobalErrors({}))
    .use(apisaucePlugin())
    .use(
      reactotronRedux({
        onRestore: (state: any) =>
          Object.entries(state).reduce(
            // eslint-disable-next-line new-cap
            (prev, [key, value]) => ({
              ...prev,
              [key]: key === 'nav' ? value : Immutable(value),
            }),
            {},
          ),
      }),
    )
    .use(overlay())
    .connect();
}

export default Reactotron;
