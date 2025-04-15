import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


// import NoPage from './NoPage';
import Layout from './Layout';
import TodoStrike from './components/todoWithStrikeThrough/TodoStrike';
import Pagination from './components/pagination/Pagination';
import StarReviewWithHover from './components/starRating/StarReviewWithHover';
import InfiniteScroll from './components/infiniteScroll/InfiniteScroll';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<TodoStrike />} />
          <Route path="pagination" element={<Pagination />} />
          <Route path="starReview" element={<StarReviewWithHover />} />
          <Route path="/infiniteScroll" element={<InfiniteScroll />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
