import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Header } from '../common';
import { Home, NotFound, Glossary, About, TherapyType } from '../pages';

import './style.css';

class App extends Component {
  state = {};

  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/glossary" component={Glossary} />
          <Route path="/about" component={About} />
          <Route path="/types-of-therapist" component={TherapyType} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
