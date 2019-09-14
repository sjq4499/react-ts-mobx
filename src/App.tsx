import * as React from 'react';
import RouterView from './router/RouterView';
import routes from './router/routes';
import { BrowserRouter } from 'react-router-dom';

class App extends React.Component {
   public render() {
      return (
         <BrowserRouter>
            <RouterView routes={routes} />
         </BrowserRouter>
      );
   }
}

export default App;
