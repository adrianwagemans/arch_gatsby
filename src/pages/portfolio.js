import React from 'react';
import Layout from '../components/layout';
import PortfolioItem from '../components/PortfolioItem';

const portfolioPage = () => {
  return (
    <Layout>
      <div className={'portItem'}>
        <PortfolioItem />
      </div>
    </Layout>
  );
};

export default portfolioPage;
