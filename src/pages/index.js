import React from "react"
import {graphql} from 'gatsby'
import {StaticImage } from 'gatsby-plugin-image'
import Layout from "../components/layout"
import '../components/layout'
import Slider from "../components/slider"


const IndexPage = ({data}) => {
  return (
      <Layout>
          
          <Slider/>
          
            <div>
              <h1>
                Welcome
              </h1>
                <div>
                    <h2>
                      Welcome to Arch Studio
                    </h2>
                    <p>
                      We have a unique network and skillset to help bring your projects to life. Our small team of highly skilled individuals 
                      combined with our large network put us in a strong position to deliver exceptional results. Over the past 10 years, 
                      we have worked on all kinds of projects. From stations to high-rise buildings, we create spaces that inspire and delight. 
                      We work closely with our clients so that we understand the intricacies of each project. 
                      This allows us to work in harmony the surrounding area to create truly stunning projects that will stand the test of time. 
                    </p>
                </div>
                    <StaticImage width={500} src='../images/home/desktop/image-welcome.jpg'
                     />

                <div>

                </div>
            </div>
              <div>

                          
              </div>
              <div>

                          
              </div>

      </Layout>
  )

}
export default IndexPage;

