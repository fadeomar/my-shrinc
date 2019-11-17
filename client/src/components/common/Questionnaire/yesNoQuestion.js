import React from 'react';
import PropTypes from 'prop-types';
import { Radio } from 'antd';

const yesNoQuestion = props => {
  const { onChange, options, id, value, keyValue } = props;
  return (
    <div>
      {options.question && <h1 className="qusetion">{options.question}</h1>}
      <Radio.Group
        key={keyValue}
        onChange={onChange}
        value={value}
        className="qusetion__group"
      >
        {options.answers.map((answer, index) => (
          <Radio
            value={index.toString()}
            id={id}
            key={answer}
            className="qusetion__span"
          >
            {answer}
          </Radio>
        ))}
      </Radio.Group>
    </div>
  );
};

yesNoQuestion.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  keyValue: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  options: PropTypes.objectOf(PropTypes.object).isRequired,
};
export default yesNoQuestion;
