import Axios from 'axios';
import { BACKEND_DOMAIN } from './apiUtil';

const axiosClient = Axios.create({
  baseURL: BACKEND_DOMAIN,
});

export default axiosClient;
