import * as React from 'react';
import { inject, observer } from 'mobx-react';

interface Props {
   list: any;
   home: any;
}

@inject('home')
@observer
export default class Home extends React.Component<Props> {
   state = {
      list: []
   };
   componentDidMount() {
      console.log(this.props.home.getList());
   }

   render() {
      return <div>home</div>;
   }
}
