import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Header, Questionnaire } from '../common';
import 'antd/dist/antd.css';

import {
  Home,
  NotFound,
  Glossary,
  About,
  TherapyType,
  SignUp,
  Filter,
  Profile,
} from '../pages';

import './style.css';

class App extends Component {
  state = {};

  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/asd" component={Questionnaire} />
          <Route path="/glossary" component={Glossary} />
          <Route path="/about" component={About} />
          <Route path="/types-of-therapist" component={TherapyType} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/filter" component={Filter} />
          <Route path="/Profile/:id" component={Profile} />

          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
