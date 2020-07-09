import React, { Component, useCallback } from 'react';

import HomePage from './pages/customer/HomePage';
import { Switch, Route } from 'react-router-dom'
import Login from './screens/LoginScreen';
import Logout from './screens/LoginScreen/Logout';
import appRouters from './routers';

function App() {
  const renderRouter = useCallback(() =>
  appRouters.map((router, index) => {
      return (
        <Route
          key={index.toString()}
          path={`${router.parentPath}${router.path}`}
          component={router.component}
          exact={router.exact === true}
        />
      );
   
  }), []);
  return (
    <Switch>
      {renderRouter()}
    </Switch>
  );
}

export default App;
