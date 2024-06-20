import React from 'react';
import FeaturedArticle from './FeaturedArticle';
import TrendingCard from './TrendingCard';
import '../assets/css/mainContent.css';
import Image1 from '../assets/images/ai.webp';
import homeTechImage from '../assets/images/home-tech.jpg';
import sustainableImage from '../assets/images/sustainable.jpg';
import startupImage from '../assets/images/startup.jpg';
import sustainableImage2 from '../assets/images/sustainable1.jpg';

const MainContent = () => {
  return (
    <main className="main-content">
      <div className="container">
        <div className="left-column">
          <FeaturedArticle />
        </div>
        <div className="center-column">
          <div className="featured-image">
          <img src={Image1}  width="670" height="700" alt="Featured Image" />
          </div>
        </div>
        
        <div className="right-column">
   <TrendingCard
  image={sustainableImage2}
  category="Technology"
  author="Paul Rodrigo"
  title="Revolutionizing Connectivity & Communication"
/>
<TrendingCard
  image={homeTechImage}
  category="Technology"
  author="Paul Rodrigo"
  title="Revolutionizing Connectivity & Communication"
/>
<TrendingCard
  image={sustainableImage}
  category="Natural Science"
  author="James Gordon"
  title="Exploring Nature's Hidden Kingdom"
/>
<TrendingCard
  image={startupImage}
  category="Small Business"
  author="Emma Lopez"
  title="The Startup Success Story of Susanto"
/>
        </div>
      </div>
    </main>
  );
}

export default MainContent;
