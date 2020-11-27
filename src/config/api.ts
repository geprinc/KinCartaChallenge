import {create} from 'apisauce';
import Reactotron from 'reactotron-react-native';

const baseURL = 'https://s3.amazonaws.com/technical-challenge/v3/';

const api = create({
  baseURL,
  timeout: 30000,
});

api.addMonitor(Reactotron.apisauce);

export default api;
