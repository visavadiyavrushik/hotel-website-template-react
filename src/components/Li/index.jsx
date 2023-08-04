import React from 'react';
import PropType from 'prop-types';
import { ReactComponent as CheckIcon } from '../../assets/svg/checksvg.svg';

const LI = ({ title, icon }) => {
  return (
    <li className="li-main">
      <div className="li-style">
        {icon ? icon : <CheckIcon />}
        <div>{title}</div>
      </div>
    </li>
  );
};

LI.propTypes = {
  title: PropType.string,
  icon: PropType.element
};

export default LI;
