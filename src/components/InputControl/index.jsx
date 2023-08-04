import React from 'react';
import PropType from 'prop-types';

const Input = (props) => {
  const { name } = props;
  return (
    <>
      <div className="input-block form-group">
        <input type="text" name="input-text" id="input-text" required spellCheck="false" />
        <span className="placeholder">{name}</span>
      </div>
    </>
  );
};

Input.propTypes = {
  label: PropType.string.isRequired,
  name: PropType.string
};

export default Input;
