import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import NavMobile from './nav/NavMobile';
import Navigation from './nav/Navigation';
import './header.scss';
import { Link } from 'gatsby';

const header = () => {
  return (
    <header className='header'>
      <Link to='/'>
        <StaticImage src='../images/logo.svg' alt='logo' />
      </Link>

      <nav>
        <Navigation />
        <NavMobile />
      </nav>
    </header>
  );
};

export default header;
