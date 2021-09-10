import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const Image = ({ name, alt }) => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "home/desktop/image-welcome.jpg" }) {
        name
        childImageSharp {
          gatsbyImageData(
            width: 500
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `);

  return <GatsbyImage image={getImage(data.file)} alt={alt ?? ''} />;
};

export default Image;
