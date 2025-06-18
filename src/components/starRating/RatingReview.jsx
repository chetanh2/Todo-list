import React, { useState } from "react";

const RatingReview = () => {
  const [rating, setRating] = useState(0);
  const stars = [1, 2, 3, 4, 5];
  return (
    // <div className=''>
    //   {[1, 2, 3, 4, 5].map((star) => {
    //     return (
    //       <span
    //         key={star}
    //         className={`transition-all duration-200 ease-linear ${
    //           rating >= star
    //             ? "text-yellow-400"
    //             : "text-gray-400 hover:text-yellow-400"
    //         }`}
    //         style={{
    //           cursor: "pointer",
    //           fontSize: `35px`,
    //         }}
    //         onClick={() => {
    //           setRating(star);
    //         }}
    //       >
    //         {" "}
    //         ★{" "}
    //       </span>
    //     );
    //   })}
    // </div>


    <div className="">
      {stars.map((star)=>{
        return(
          <span onClick={()=> setRating(star)} className={`text-7xl ${rating >= star ? "text-yellow-400" : "text-gray-400"} cursor-pointer `}>*</span>
        )
      })}
    </div>
  );
};

export default RatingReview;
