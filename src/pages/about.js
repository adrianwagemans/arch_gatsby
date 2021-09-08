import React from 'react';
import About from '../components/About';
import Layout from '../components/layout';
import AboutHerritage from '../components/AboutHerritage';
import Leaders from '../components/Leaders';

const aboutPage = () => {
  return (
    <Layout>
      <>
        <About />

        <AboutHerritage />
        <div className='leadersSection'>
          <h2>The leaders</h2>
          <div className='leadersWraper'>
            <Leaders />
          </div>
        </div>
      </>
    </Layout>
  );
};

export default aboutPage;
