import { Link } from 'gatsby';
import React from 'react';
import arrowIcon from '../images/icons/icon-arrow.svg';

const Button = ({ buttonContent, buttonLink, buttonClass }) => {
  return (
    <div>
      <Link to={buttonLink}>
        <div className={buttonClass}>
          {buttonContent}
          <img
            style={{ paddingLeft: '15px' }}
            src={arrowIcon}
            width={20}
            alt='logo'
          />
        </div>
      </Link>
    </div>
  );
};

export default Button;
