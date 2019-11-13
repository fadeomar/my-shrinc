import React from 'react';
import PropTypes from 'prop-types';
import { Avatar } from 'antd';
import { withRouter } from 'react-router-dom';

import './style.css';

const CardContent = ({
  history: { push },
  id,
  type,
  city,
  approach,
  image,
}) => (
  <div
    role="button"
    className="card__content"
    onClick={() => push(`/profile/${id}`)}
    tabIndex={0}
  >
    <Avatar
      shape="circle"
      src={image}
      size={100}
      icon="user"
      className="card__photo"
    />
    <div className="cardContent_info">
      <h3 className="card__type">{type}</h3>
      <h3 className="card__type">{city}</h3>
      <h3 className="card__approach">{approach} </h3>
    </div>
  </div>
);

CardContent.propTypes = {
  image: PropTypes.string.isRequired,
  approach: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default withRouter(CardContent);
