import React from 'react';

interface RatingProps {
  rating: number;
}

const Rating: React.FC<RatingProps> = ({ rating }) => {
  const maxRating = 5; // Assuming maximum rating is 5

  // Calculate the number of filled stars and the remaining fractional part
  const filledStars = Math.floor(rating);
  const remainder = rating - filledStars;

  // Render stars based on the rating value
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= maxRating; i++) {
      // Determine whether to render a filled star, a half-filled star, or an empty star based on the rating
      let starClass = "bg-gray-300";
      if (i <= filledStars) {
        starClass = "bg-orange-400";
      } else if (i === filledStars + 1 && remainder > 0) {
        starClass = "bg-orange-400 bg-gradient-to-r from-orange-400 via-yellow-400 to-gray-300";
      }
      stars.push(
        <input
          key={i}
          type="radio"
          name={`rating-${maxRating}`}
          className={`mask mask-star-2 ${starClass}`}
          checked={i <= filledStars}
          readOnly
          
        />
      );
    }
    return stars;
  };

  return <div className="rating rating-xs">{renderStars()}</div>;
};

export default Rating;

