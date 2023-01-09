import axios from 'axios';
import {baseUrl} from './costants/constants'

const instance = axios.create({
    baseURL: baseUrl,
 
  });

  export default instance;