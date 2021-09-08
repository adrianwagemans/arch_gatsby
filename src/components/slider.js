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

  console.log(image);
  return (
    <div className='sliderContainer'>
      <div className='slideSelector'>
        <div className='slideImage' onClick={() => setImages(0)}>
          <h2>01</h2>
        </div>
        <div className='slideImage' onClick={() => setImages(1)}>
          <h2>02</h2>
        </div>
        <div className='slideImage' onClick={() => setImages(2)}>
          <h2>02</h2>
        </div>
        <div className='slideImage' onClick={() => setImages(3)}>
          <h2>03</h2>
        </div>
      </div>
      <GatsbyImage image={getImage(image)} alt='towae' />;
    </div>
  );
};
export default Slider;
