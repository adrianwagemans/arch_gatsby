import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const AboutHerritage = () => {
  return (
    <div className='heritageWraper'>
      <div className='heritagecontent'>
        <h2>Our Heritage</h2>
        <p>
          Founded in 2007, we started as a trio of architects. Our complimentary
          skills and relentless attention to detail turned Arch into one of the
          most sought after boutique firms in the country.
        </p>
        <p>
          Speciliazing in Urban Design allowed us to focus on creating
          exceptional structures that live in harmony with their surroundings.
        </p>
        <p>
          We consider every detail from every surrounding element to inform our
          designs. Our small team of world-class professionals provides input on
          every project.
        </p>
      </div>
      <div className='heritageImg'>
        <StaticImage
          src='../images/about/desktop/image-heritage.jpg'
          alt='empire'
          placeholder='blurred'
          layout='constrained'
          width={400}
          height={600}
        />
      </div>
    </div>
  );
};

export default AboutHerritage;
