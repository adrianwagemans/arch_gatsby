import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';
import '../components/layout';
import Slider from '../components/slider';
import Button from '../components/button';
import Image from '../components/WelcomeImage';
import FeatureShow from '../components/FeatureShow';

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Slider />

      <section className='welcomeSection'>
        <div className='welcomeWraper'>
          <div className='welcomeContent'>
            <h1>Welcome</h1>
            <h2>Welcome to Arch Studio</h2>
            <p>
              We have a unique network and skillset to help bring your projects
              to life. Our small team of highly skilled individuals combined
              with our large network put us in a strong position to deliver
              exceptional results.
            </p>
            <p>
              Over the past 10 years, we have worked on all kinds of projects.
              From stations to high-rise buildings, we create spaces that
              inspire and delight.
            </p>
            <p>
              We work closely with our clients so that we understand the
              intricacies of each project. This allows us to work in harmony the
              surrounding area to create truly stunning projects that will stand
              the test of time.
            </p>
          </div>

          <Image alt={'sdasd'} name={'image-welcome'} />
        </div>
      </section>

      <section className='smallSection'>
        <div className='smallContent'>
          <h2>Small team,</h2>
          <h2>big ideas</h2>

          <Button
            buttonContent={'About Us'}
            buttonLink={'/about'}
            buttonClass={'buttonSmall'}
          />
        </div>

        <StaticImage
          className='smallImage'
          width={1440}
          src='../images/home/desktop/image-small-team.jpg'
        />
      </section>

      <section>
        <div className='featuredContent'>
          <h2>Featured</h2>
          <Button
            buttonContent={'See all'}
            buttonLink={'/portfolio'}
            buttonClass={'buttonFeatured'}
          />
        </div>
        <div className='portItem'>
          <FeatureShow />
        </div>
      </section>
    </Layout>
  );
};
export default IndexPage;
