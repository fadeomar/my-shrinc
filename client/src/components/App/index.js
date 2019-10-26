import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home/home';

import './style.css';

class App extends Component {
  state = {
    x: '',
  };

  componentDidMount() {
    this.getdata();
  }

  getdata = () => {
    fetch('api/v1')
      .then(res => res.json())
      .then(res => this.setState({ x: res }))
      .catch(console.log);
  };

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
