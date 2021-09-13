import React, { useState } from 'react';
import NavLinks from './NavLinks';
import { CgMenuRound } from 'react-icons/cg';
import { CgCloseO } from 'react-icons/cg';

const NavMobile = () => {
  const [open, setOpen] = useState(false);

  const openIcon = (
    <CgMenuRound
      onClick={() => setOpen(!open)}
      className='burguer'
      size='40px'
      color='grey'
    />
  );

  const closedIcon = (
    <CgCloseO
      onClick={() => setOpen(!open)}
      className='burguer'
      size='40px'
      color='grey'
    />
  );

  return (
    <div className='MobileNavigation'>
      {open && <NavLinks />}
      {open ? closedIcon : openIcon}
    </div>
  );
};

export default NavMobile;
