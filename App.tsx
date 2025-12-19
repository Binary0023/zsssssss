import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Categories from './components/Categories';
import NewArrivals from './components/NewArrivals';
import Offers from './components/Offers';
import Logos from './components/Logos';
import Stories from './components/Stories';

const App: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <Categories />
      <NewArrivals />
      <Offers />
      <Logos />
      <Stories />
    </Layout>
  );
};

export default App;
