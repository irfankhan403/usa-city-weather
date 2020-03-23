import * as coreAxios from 'axios';
import config from '../config/config';

const axios = coreAxios.default.create({
  baseURL: config.baseURL
});

export default axios;