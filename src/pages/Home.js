

import React from 'react';
import Header from '../components/Header'; 
import Banner from '../components/Banner'; 
import MainContent from '../components/MainContent'; 
import Footer from '../components/Footer'; 
import '../App.css'; 

const Home = () => {
  return (
    <div>
      <Banner />
      <MainContent />
      <Footer />
    </div>
  );
}

export default Home;
