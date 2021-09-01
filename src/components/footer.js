import React from 'react';
import { Link } from 'gatsby';

import { StaticImage } from 'gatsby-plugin-image';

import './footer.scss';

import MainButton from './button';

const footer = () => {
  return (
    <footer>
      <div className='footerLogoContainer'>
        <StaticImage width={80} alt='logo' src='../images/logoFooter.svg' />
      </div>
      <div className='footerLinksCont'>
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

        <MainButton
          buttonContent={'see our portfolio'}
          buttonLink={'/portfolio'}
          buttonClass={'buttonFooter'}
        />
      </div>
    </footer>
  );
};

export default footer;
