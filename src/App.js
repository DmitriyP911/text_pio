import React from 'react';
import Registration from './Pages/Components/Registration/Registartion';
import Login from './Pages/Components/Login/Login';
import News from './Pages/Components/News/News';
import { BrowserRouter as Router, Route, NavLink, Redirect } from "react-router-dom";
import isLogin from './helpers/login';

function App () {
  const login = isLogin( 'userInfo' );
  return (
    <div>
      <Router>
        <Route
          path="/"
          render={() =>
            login ? <Redirect to="/news" /> : <Redirect to="/login" />
          }
        />
        <Route path="/" exact>
          <NavLink to="/registration" exact >
            registration
        </NavLink>
        </Route>
        <Route path="/registration" component={Registration} />
        <Route path="/login" component={Login} />
        <Route path="/news" component={News} />
      </Router>
    </div>
  );
}

export default App;
