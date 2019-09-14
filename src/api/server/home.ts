import axios from 'axios';
// import requext from '../utils/request';
export const getUserList = () => {
   return axios.get(
      'http://bb.shoujiduoduo.com/baby/bb.php?type=getvideos&pagesize=30&collectid=29'
   );
};
