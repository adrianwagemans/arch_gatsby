import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';

export const Slider = ({ data }) => {
  const image = getImage(data);
  console.log(data);

  return (
    <div>
      <StaticImage
        src='../images/home/desktop/slider/image-hero-federal.jpg'
        alt='federal building'
        placeholder='blurred'
        layout='full width'
        maxWidth={1500}
        maxHeigth={1000}
      />
    </div>
  );
};
export default Slider;
