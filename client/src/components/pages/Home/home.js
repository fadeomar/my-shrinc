/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import LogoContainer from './logo-container/logo-container';
import Button from '../../common/button/Button';
import Header from '../../common/Header/Header';
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
        <Header />
        <LogoContainer />
        <div className="Btn-container">
          <Button
            className="questionary big-green-btn"
            text="&nbsp;&nbsp;&nbsp;Find the Right Therapy for You"
            onClick={() => this.goTo('questionary')}
            Icon={QuestionaryIcon}
          />
          <Button
            className="find big-green-btn"
            text="&nbsp;&nbsp;&nbsp;Search for Therapists"
            onClick={() => this.goTo('search')}
            Icon={FindIcon}
          />
        </div>
        <SignUpLink />
      </div>
    );
  }
}

export default Home;
