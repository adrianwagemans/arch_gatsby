import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const PortfolioItem = ({ portImage, portDate, portTitle }) => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { relativeDirectory: { eq: "portfolio/desktop" } }) {
        edges {
          node {
            name
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `);
  const images = data.allFile.edges.map((edge) => {
    const image = getImage(edge.node);
    return (
      <div className={'portImg'}>
        <p>{portDate}</p>
        <p>{portTitle}</p>

        <GatsbyImage image={image} />
      </div>
    );
  });
  return images;
};

export default PortfolioItem;
