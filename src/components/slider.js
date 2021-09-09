import React, { useState } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';

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
      <GatsbyImage
        image={getImage(image)}
        alt={data.allFile.edges[images].name}
      />
      ;
    </div>
  );
};
export default Slider;
