import React, { useState } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import Button from '../components/button';

export const Slider = () => {
  const data = useStaticQuery(graphql`
    query SLIDER {
      allContentfulSlider {
        edges {
          node {
            id
            image {
              description
              title
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  `);

  const [images, setImages] = useState(0);

  const image = data.allContentfulSlider.edges[images].node.image;

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
        <h1>{image.title}</h1>

        <p>{image.description}</p>
        <Button
          buttonContent={'See Our Portfolio'}
          buttonLink={'/portfolio'}
          buttonClass={'buttonSmall'}
        />
      </div>
      <GatsbyImage image={getImage(image)} alt={image.title} />;
    </div>
  );
};
export default Slider;
