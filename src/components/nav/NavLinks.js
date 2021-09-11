import React from 'react';
import { Link } from 'gatsby';


const NavLinks = () => {
  return (
    <div>
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
    </div>
  );
};

export default NavLinks;
