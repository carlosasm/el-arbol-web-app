import React from 'react';
import './App.css';
import AppAppBar from './views/AppBar';
import ProductHero from './views/ProductHero';
import ProductValues from './views/ProductValues';
import ProductCategories from './views/ProductCategories';
import ProductHowItWorks from './views/HowItWorks';
import ProductCTA from './views/ProductCTA';
import ProductSmokingHero from './views/ProductSmokingHero';
import AppFooter from './views/AppFooter';

function App() {
  return (
    <>
    <AppAppBar />
    <ProductHero />
    <ProductValues />
    <ProductCategories />
    <ProductHowItWorks />
    <ProductCTA />
    <ProductSmokingHero />
    <AppFooter />
    </>
    
  );
}

export default App;
