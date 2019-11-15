import React, { Component } from 'react';

import axios from 'axios';
import { notification } from 'antd';

import { Loader, FilterComponent, Card } from '../../common';
import './style.css';

class Filter extends Component {
  state = {
    data: [],
    disabled: false,
    noResult: '',
  };

  componentDidMount = async () => {
    const initialTherapest = await axios.get('/api/v1/initial');
    this.setState({ data: initialTherapest.data.data });
  };

  openNotificationWithIcon = error => {
    notification.error({
      message: "we can't make filter process right now ",
      description: error.message,
      duration: 3,
    });
  };

  onSubmit = async data => {
    try {
      this.setState({ disabled: true });
      const result = await axios.post('/api/v1/filter', { data: { ...data } });
      this.setState(() => {
        if (result.data.data.length) {
          return { data: result.data.data, disabled: false };
        }
        return {
          data: result.data.data,
          disabled: false,
          noResult: 'thire si no result',
        };
      });
    } catch (error) {
      this.openNotificationWithIcon(error);
    }
  };

  render() {
    const { data, disabled, noResult } = this.state;
    return (
      <div className="Filter-page__container">
        <h1 className="filter__title">Find approprate therapy: </h1>
        <FilterComponent handleSubmit={this.onSubmit} disabled={disabled} />
        <hr className="filter__brack-line" />
        <h2 className="card__title">Therapists:</h2>
        {!data.length ? noResult || <Loader /> : <Card data={data} />}
      </div>
    );
  }
}

export default Filter;
