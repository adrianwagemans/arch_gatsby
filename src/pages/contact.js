import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const contactPage = () => {
  return (
    <Layout>
      <div>
        <p>contact</p>
        <p>
          llamame mono<Link to='/about'>click aca</Link>
        </p>
      </div>
    </Layout>
  );
};

export default contactPage;
