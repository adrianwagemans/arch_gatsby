import React from "react"
import {graphql} from 'gatsby'
import {GatsbyImage } from 'gatsby-plugin-image'
import Layout from "../components/layout"
import '../components/layout'


import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'


const IndexPage = ({data}) => {
  return (
      <Layout>
          <h1>
           titulo y otras cosas
          </h1>
          <Carousel>
             {data.slideShow.edges.map(({node}) => (

            <Carousel.Item key={node.id}>
               
                  
                  <GatsbyImage image={node.childImageSharp.gatsbyImageData} alt={node.base}/>

                  </Carousel.Item>

                
              ))}

           

          </Carousel>
          
      </Layout>
  )

}
export default IndexPage;

export const pageQuery = graphql`
  query{
    slideShow: allFile(
      filter: {relativeDirectory: {eq: "home/desktop/slider"}, relativePath: {}}
    ) {
      edges {
        node {
          id
          base
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED 
              quality: 70 
              blurredOptions: {width: 100})
          }
        }
      }
    }
  }
  
`