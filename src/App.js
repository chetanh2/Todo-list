/* eslint-disable */
import React, { useState, useEffect } from "react";
import List from "./components/todoList/List";
import Alert from "./Alert";
import DmartItems from "./components/DmartItems";
import "./App.css";
import "./index.css";
import TodoStrike from "./components/todoWithStrikeThrough/TodoStrike";
import RatingReview from "./components/starRating/RatingReview";
import StarReviewWithHover from "./components/starRating/StarReviewWithHover";
import InfiniteScroll from "./components/infiniteScroll/InfiniteScroll";

function App() {

  return (
    <div className="">
      <InfiniteScroll/>
    <section className="section-center max-w-3xl mx-auto mt-60">
      <div className="grid gap-y-3">
        <RatingReview/>
        <StarReviewWithHover />
        <TodoStrike />
      </div>
    </section>
    </div>
  );
}

export default App;
