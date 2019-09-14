import { observable, action } from 'mobx';

import { getUserList } from '../../api/index';
// interface Props {
//    list: any;
// }

class Home {
   @observable list: any = [];
   @action async getList(): Promise<any> {
      const list = await getUserList();
      console.log(this.list);
      return list;
   }
}

export default Home;
