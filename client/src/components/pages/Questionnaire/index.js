import React from 'react';

import { Questionnaire as Q } from '../../common';
import './style.css';

const Questionnaire = () => (
  <div className="questionary__container">
    <h1 className="questionary__title">Questionnaire description</h1>
    <Q />
  </div>
);

export default Questionnaire;
