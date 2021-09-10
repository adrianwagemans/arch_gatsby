import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const Contact = ({ page }) => {
  const contact = useStaticQuery(graphql`
    query CONTACT {
      contentfulAboutContactArch(title: { eq: "Contact" }) {
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

  return (
    <div className='aboutHero'>
      <GatsbyImage image={getImage(contact.contentfulAboutContactArch.image)} />
      <h1>{contact.contentfulAboutContactArch.title}</h1>
      <div className='aboutHeroContent'>
        <h2>{contact.contentfulAboutContactArch.subtitle}</h2>
        <p>{contact.contentfulAboutContactArch.text.text}</p>
      </div>
    </div>
  );
};

export default Contact;
