import React from 'react';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';

const NavLinks = () => {
  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };
  return (
    <div>
      <ul>
        <motion.li initial={animateFrom} animate={animateTo}>
          <h3>
            <Link className='link' to='/about'>
              about
            </Link>
          </h3>
        </motion.li>
        <motion.li initial={animateFrom} animate={animateTo}>
          <h3>
            <Link className='link' to='/portfolio'>
              portfolio
            </Link>
          </h3>
        </motion.li>
        <motion.li initial={animateFrom} animate={animateTo}>
          <h3>
            <Link className='link' to='/contact'>
              contact
            </Link>
          </h3>
        </motion.li>
      </ul>
    </div>
  );
};

export default NavLinks;
