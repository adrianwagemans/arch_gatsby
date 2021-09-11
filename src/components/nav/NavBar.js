import Navigation from './Navigation';
import NavMobile from './NavMobile';

import React from 'react';

const NavBar = () => {
  return (
    <div className='NavBar'>
      <NavMobile />
      <Navigation />
    </div>
  );
};

export default NavBar;
