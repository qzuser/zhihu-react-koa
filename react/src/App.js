import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom'
import './statics/icons/iconfont.css'
import Header from "./common/header";
import HomePage from './pages/home';
import LoginPage from './pages/login';
import QuesPage from "./pages/questions";
// import PersonPage from './pages/Personal';
import {GlobalStyle} from "./globalStyle.js";
import store from './store';



function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Provider store={store}>
        <BrowserRouter>
          <Route path="/" component={Header} />
          <Route path="/" exact component={HomePage} />
          <Route path="/login" exact component={LoginPage} />
          <Route path="/heat/detail/:id" component={QuesPage} />
        </BrowserRouter>
      </Provider>
    </React.Fragment>
  );
}

export default App;