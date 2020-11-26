import {create} from 'apisauce';

const baseURL = 'https://s3.amazonaws.com/technical-challenge/v3';

const api = create({
  baseURL,
  timeout: 30000,
});

export default api;
