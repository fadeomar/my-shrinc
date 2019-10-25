import React, { Component } from 'react';

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
    const { x } = this.state;
    return <div className="App">{x}</div>;
  }
}

export default App;
