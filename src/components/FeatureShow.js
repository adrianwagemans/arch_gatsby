import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const FeatureShow = ({ portImage, portDate, portTitle }) => {
  const data = useStaticQuery(graphql`
    query FeaturedItem {
      allContentfulProject {
        edges {
          node {
            featured
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
    if (edge.node.featured) {
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
    }
  });
  return images;
};

export default FeatureShow;
