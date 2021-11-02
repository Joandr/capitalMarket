import React from "react";
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import IndexPage from "./pages/index/IndexPage";
import LoginPage from "./pages/login/LoginPage";
import RegisterPage from "./pages/register/RegisterPage";
import MainPage from "./pages/main/MainPage";
import Maingrid from './pages/main/Maingrid'
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" exact>
          <LoginPage />
        </Route>
        <Route path="/register" exact>
          <RegisterPage/>
        </Route>
        <Route path="/main" exact>
          <MainPage/>
        </Route>
        <Route path="/maingrid" exact>
          <Maingrid/>
        </Route>
        <Route>
          <IndexPage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
