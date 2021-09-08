import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import './header.scss';

const header = () => {
  return (
    <header className='header'>
      <Link to='/'>
        <StaticImage src='../images/logo.svg' alt='logo' />
      </Link>

      <nav>
        <ul>
          <li>
            <h3>
              <Link className='link' to='/about'>
                about
              </Link>
            </h3>
          </li>
          <li>
            <h3>
              <Link className='link' to='/portfolio'>
                portfolio
              </Link>
            </h3>
          </li>
          <li>
            <h3>
              <Link className='link' to='/contact'>
                contact
              </Link>
            </h3>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default header;
