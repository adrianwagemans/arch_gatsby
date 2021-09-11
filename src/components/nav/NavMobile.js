import React, { useState } from 'react';
import NavLinks from './NavLinks';
import { CgMenuRound } from 'react-icons/cg';

const NavMobile = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className='MobileNavigation'>
      <CgMenuRound
        onClick={() => setOpen(!open)}
        className='burguer'
        size='40px'
        color='blue'
      />
      {open && <NavLinks />}
    </div>
  );
};

export default NavMobile;
