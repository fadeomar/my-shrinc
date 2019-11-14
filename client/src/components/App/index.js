import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Header } from '../common';
import { Home, NotFound, Glossary, About } from '../pages';

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
          <Route path="/About" component={About} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
