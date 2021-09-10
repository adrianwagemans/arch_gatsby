import React, { useState } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import Button from '../components/button';

export const Slider = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { relativeDirectory: { eq: "home/desktop/slider" } }) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(
                width: 1500
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
  `);

  const [images, setImages] = useState(0);

  const image = data.allFile.edges[images].node;

  return (
    <div className='sliderContainer'>
      <div className='slideSelector'>
        <div
          className={'slideImage'}
          onClick={() => {
            setImages(0);
          }}
        >
          <h4>01</h4>
        </div>
        <div
          className='slideImage'
          onClick={() => {
            setImages(1);
          }}
        >
          <h4>02</h4>
        </div>
        <div className='slideImage' onClick={() => setImages(2)}>
          <h4>03</h4>
        </div>
        <div className='slideImage' onClick={() => setImages(3)}>
          <h4>04</h4>
        </div>
      </div>
      <div className='sliderContent'>
        <h1>{'dadad'}</h1>

        <p>
          The Seraph Station project challenged us to design a unique station
          that would transport people through time. The result is a fresh and
          futuristic model inspired by space stations.
        </p>
        <Button
          buttonContent={'See Our Portfolio'}
          buttonLink={'/portfolio'}
          buttonClass={'buttonSmall'}
        />
      </div>
      <GatsbyImage image={getImage(image)} alt={'tower'} />;
    </div>
  );
};
export default Slider;
