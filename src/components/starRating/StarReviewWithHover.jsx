import React, { useState } from "react";
import RatingReview from "./RatingReview";

const StarReviewWithHover = () => {
  const [rating, setRating] = useState(0);
  const [hoveredStar, setHoveredStar] = useState(0);
  return (
    <div className="flex flex-col gap-2 items-center my-28 justify-center">
      <div className="flex gap-2 items-center my-28 justify-center">
        {[1, 2, 3, 4, 5].map((star) => {
          return (
            <div
              key={star}
              onClick={() => setRating(star)}
              onMouseEnter={() => setHoveredStar(star)}
              onMouseLeave={() => setHoveredStar(0)}
              className={`transition-all duration-300 ease-in-out text-3xl text-gray-400 cursor-pointer ${
                rating >= star || hoveredStar >= star
                  ? "text-yellow-400"
                  : "text-gray-400"
              }  ${
                rating < star && hoveredStar === 0
                  ? "hover:text-yellow-400"
                  : ""
              }`}
            >
              ★
            </div>
          );
        })}
        <h5 className="ml-4">Star Review With Hover</h5>
      </div>
      <RatingReview />
    </div>
  );
};

export default StarReviewWithHover;
