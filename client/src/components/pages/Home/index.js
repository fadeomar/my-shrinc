/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import LogoContainer from './logo-container/logo-container';
import { Button } from '../../common';
import SignUpLink from './logo-container/sign-up-link';
import { QuestionaryIcon, FindIcon } from '../../assets';
import './Home.css';

class Home extends Component {
  state = {};

  goTo(path) {
    const {
      history: { push },
    } = this.props;
    push(path);
  }

  render() {
    return (
      <div>
        <LogoContainer />
        <div className="Btn-container">
          <Button
            className="questionary big-green-btn"
            onClick={() => this.goTo('questionary')}
          >
            <QuestionaryIcon />
            &nbsp;&nbsp;&nbsp;Find the Right Therapy for You
          </Button>

          <Button
            className="find big-green-btn"
            onClick={() => this.goTo('/filter')}
          >
            <FindIcon />
            &nbsp;&nbsp;&nbsp;Search for Therapists
          </Button>
        </div>
        <SignUpLink />
      </div>
    );
  }
}

export default Home;
