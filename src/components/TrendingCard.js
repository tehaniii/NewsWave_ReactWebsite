import React from 'react';
import '../assets/css/TrendingCard.css';

const TrendingCard = ({ image, category, author, title }) => {
  return (
    <div className="trending-card">
      <img src={image} alt="Trending" />
      <div className="trending-info">
        <p className="meta">{category} | {author}</p>
        <h3>{title}</h3>
        <a href="categories.php">READ MORE</a>
      </div>
    </div>
  );
}

export default TrendingCard;
