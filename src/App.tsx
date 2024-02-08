import React from 'react';
import './App.css';
import AppAppBar from './views/AppBar';
import ProductHero from './views/ProductHero';
import ProductValues from './views/ProductValues';
import ProductCategories from './views/ProductCategories';
import ProductHowItWorks from './views/HowItWorks';
import ProductSmokingHero from './views/ProductSmokingHero';
import AppFooter from './views/AppFooter';
import ProductCategoriesVet from './views/ProductCategoriesVet';
import ProductHowItWorksVet from './views/HowItWorksVet';
import ContactForm from './views/ContactUs';

function App() {
  return (
    <>
    <AppAppBar />
    <ProductHero />
    <ProductValues />
    <ProductCategories />
    <ProductHowItWorks />
    <ProductCategoriesVet />
    <ProductHowItWorksVet />
    <ProductSmokingHero />
    <ContactForm />
    <AppFooter />
    </>
    
  );
}

export default App;
