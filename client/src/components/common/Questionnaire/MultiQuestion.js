import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from 'antd';

import './style.css';

const MultiQuestion = props => {
  const { onMultiChange, options, id, defaultValue, keyValue } = props;
  return (
    <div>
      {options.question && <h1 className="qusetion">{options.question}</h1>}
      <Checkbox.Group
        key={keyValue}
        onChange={onMultiChange}
        defaultValue={defaultValue}
        className="qusetion__group"
      >
        {options.answers.map((answer, index) => (
          <Checkbox
            value={index.toString()}
            id={id}
            key={answer}
            className="qusetion__span"
          >
            {answer}
          </Checkbox>
        ))}
      </Checkbox.Group>
    </div>
  );
};

MultiQuestion.propTypes = {
  onMultiChange: PropTypes.func.isRequired,
  defaultValue: PropTypes.arrayOf.isRequired,
  keyValue: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  options: PropTypes.objectOf(PropTypes.object).isRequired,
};
export default MultiQuestion;
