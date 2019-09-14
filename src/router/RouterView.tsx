import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

interface PropsInfo {
   routes: any;
}

class RouterView extends React.Component<PropsInfo> {
   public render() {
      let { routes } = this.props;
      const redirectArr = routes.filter((item: any) => item.redirect);
      routes = routes.filter((item: any) => !item.redirect);
      return (
         <Switch>
            {routes
               .map((item: any, index: number) => {
                  return (
                     <Route
                        path={item.path}
                        key={index}
                        render={(props: any) => {
                           return (
                              <item.component
                                 {...props}
                                 children={item.children}
                              />
                           );
                        }}
                     />
                  );
               })
               .concat(
                  redirectArr.map((item: any, index: number) => {
                     return (
                        <Redirect
                           key={index}
                           from={item.path}
                           to={item.redirect}
                        />
                     );
                  })
               )}
         </Switch>
      );
   }
}
export default RouterView;
