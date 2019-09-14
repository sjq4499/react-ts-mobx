import axios from 'axios';

const request = axios.create({
   baseURL: 'http://106.13.220.177:7001',
   timeout: 5000
});

request.interceptors.response.use(
   response => {
      return response.data;
   },
   error => {
      console.log(error);
   }
);

export default request;
