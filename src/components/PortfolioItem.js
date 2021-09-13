import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const PortfolioItem = ({ portImage, portDate, portTitle }) => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allContentfulProject {
        edges {
          node {
            title
            creationDate
            image {
              gatsbyImageData
              id
            }
          }
        }
      }
    }
  `);
  const images = data.allContentfulProject.edges.map((edge) => {
    const image = getImage(edge.node.image);
    return (
      <div className='imageDiv' key={edge.node.image.id}>
        <h3>{edge.node.title}</h3>
        <p>{edge.node.creationDate}</p>
        <div>
          <GatsbyImage
            className='portImage'
            image={image}
            alt={edge.node.title}
          />
        </div>
      </div>
    );
  });
  return images;
};

export default PortfolioItem;
