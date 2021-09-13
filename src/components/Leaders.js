import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const Leaders = () => {
  const data = useStaticQuery(graphql`
    query LEADERS {
      allContentfulLeaders {
        edges {
          node {
            image {
              gatsbyImageData
            }
            job
            name
          }
        }
      }
    }
  `);

  const leaderItem = data.allContentfulLeaders.edges.map((edge) => {
    return (
      <div className='leaderItem'>
        <GatsbyImage image={getImage(edge.node.image)} alt={edge.node.name} />
        <h4>{edge.node.name}</h4>
        <p>{edge.node.job}</p>
      </div>
    );
  });
  return leaderItem;
};

export default Leaders;
