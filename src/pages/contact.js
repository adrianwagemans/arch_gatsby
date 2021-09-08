import React from 'react';
import Layout from '../components/layout';
import Contact from '../components/Contact';
import { StaticImage } from 'gatsby-plugin-image';

const contactPage = () => {
  return (
    <Layout>
      <Contact />
      <div className='contactDetails'>
        <h2>Contact Details</h2>

        <div>
          <p>Main Office</p>
          <p> Mail : archone@mail.com</p>
          <p>Address : 1892 Chenoweth Drive TN</p>
          <p>Phone : 123-456-3451</p>
        </div>
        <div>
          <p> Office II</p>
          <p> Mail : archone@mail.com</p>
          <p>Address : 3399 Wines Lane TXN</p>
          <p>Phone : 123-456-3451</p>
        </div>
      </div>
      <div className='map'>
        <StaticImage
          src='../images/contact/desktop/image-map.png'
          alt='map'
          placeholder='blurred'
          layout='constrained'
          width={1200}
          height={600}
        />
      </div>
    </Layout>
  );
};

export default contactPage;
