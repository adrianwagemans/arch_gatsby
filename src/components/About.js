import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const About = ({ page }) => {
  const about = useStaticQuery(graphql`
    query ABOUT {
      contentfulAboutContactArch(title: { eq: "About" }) {
        text {
          text
        }
        image {
          gatsbyImageData
        }
        title
        subtitle
      }
    }
  `);
  console.log(about);
  return (
    <div className='aboutHero'>
      <GatsbyImage image={getImage(about.contentfulAboutContactArch.image)} />
      <h1>{about.contentfulAboutContactArch.title}</h1>
      <div className='aboutHeroContent'>
        <h2>{about.contentfulAboutContactArch.subtitle}</h2>
        <p>{about.contentfulAboutContactArch.text.text}</p>
      </div>
    </div>
  );
};

export default About;
