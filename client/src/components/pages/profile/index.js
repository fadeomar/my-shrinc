import React, { Component } from 'react';
import { Icon, Avatar } from 'antd';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Helmet } from 'react-helmet';

import { AvailabilityTime, Loader } from '../../common';
import fullTypeName from './staticData';
import './style.css';

class Profile extends Component {
  state = {
    profileData: {},
  };

  async componentDidMount() {
    const {
      history: { push },
    } = this.props;
    try {
      const {
        match: {
          params: { id },
        },
      } = this.props;

      const {
        data: {
          data: { fields },
        },
      } = await axios.get(`/api/v1/profile/${id}`);

      this.setState({ profileData: fields });
    } catch (err) {
      const error500 = err.message.includes('500');
      if (error500) {
        push('/500');
      } else {
        push('/404');
      }
    }
  }

  handleInsuranceCompanies = data =>
    JSON.parse(data).map(item => <p key={item}>{item}</p>);

  render() {
    const {
      profileData,
      profileData: {
        availability,
        city,
        email,
        fullName,
        image,
        postCode,
        priceRange,
        remote,
        skype,
        insurance,
        language,
        approach,
        type,
      },
    } = this.state;
    if (!Object.entries(profileData).length) return <Loader />;
    return (
      <section className="font">
        <Helmet>
          <title>Profile</title>
        </Helmet>
        <section className="profile_card_container">
          <div className="profile_card">
            <Avatar
              shape="circle"
              src={image[0].url}
              className="profile_avatar"
              size={120}
              icon="user"
            />
            <div className="profile_card_b">
              <h1 className="profile_username">Name : {fullName}</h1>
              <h4 className="profile_user_info">approach: {approach}</h4>
              <h4 className="profile_user_info">type: {fullTypeName[type]}</h4>
            </div>
          </div>
          <div className="profile_card_fees">
            <h3>
              <Icon type="dollar" />
              &nbsp; &nbsp;
              <span>Fees {priceRange}$ Session</span>
            </h3>
          </div>
        </section>
        <AvailabilityTime availableityTime={availability} />
        <section className="profile_contact_container">
          <h2>
            <Icon type="wifi" /> Is remotly
          </h2>
          <div className="profile_contact_info">
            <p>{remote ? 'Yes' : 'No'}</p>
          </div>
        </section>
        <section className="profile_contact_container">
          <h2>
            <Icon type="read" /> Languages
          </h2>
          <div className="profile_contact_info">
            <p>{JSON.parse(language).join(' , ')}</p>
          </div>
        </section>
        <section className="profile_contact_container">
          <h2>
            <Icon type="phone" /> Contact Info
          </h2>
          <div className="profile_contact_info">
            <h4>
              <span aria-hidden>-</span> Email
            </h4>
            <p>{email}</p>
            {skype && (
              <div>
                <h4>
                  <span aria-hidden>-</span> Skype
                </h4>
                <p>{skype}</p>
              </div>
            )}
          </div>
        </section>
        <section className="profile_contact_container">
          <h2>
            <Icon type="bank" /> Insurance Companies
          </h2>
          <div className="profile_contact_info">
            {this.handleInsuranceCompanies(insurance)}
          </div>
        </section>
        <section className="profile_contact_container">
          <h2>
            <Icon type="global" /> Location
          </h2>
          <div className="profile_contact_info">
            <h4>
              <span aria-hidden>-</span> City
            </h4>
            <p>{city}</p>
            <h4>
              <span aria-hidden>-</span> Postal code
            </h4>
            <p>{postCode}</p>
          </div>
        </section>
      </section>
    );
  }
}

Profile.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.objectOf(PropTypes.string),
  }).isRequired,
};

export default Profile;
