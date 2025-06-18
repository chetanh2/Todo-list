import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import NoPage from './NoPage';
import Layout from './Layout';
import TodoStrike from './components/todoWithStrikeThrough/TodoStrike';
import Pagination from './components/pagination/Pagination';
import StarReviewWithHover from './components/starRating/StarReviewWithHover';
import InfiniteScroll from './components/infiniteScroll/InfiniteScroll';
import TransferList from './components/transferList/TransferList';
import CountDownTimer from './components/countDownTimer/CountDownTimer';
import ClientSidePagination from './components/clientPagination/ClientSidePagination';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={appStore}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<TodoStrike />} />
            <Route path="pagination" element={<Pagination />} />
            <Route path="client-side-pagination" element={<ClientSidePagination />} />
            <Route path="starReview" element={<StarReviewWithHover />} />
            <Route path="/infiniteScroll" element={<InfiniteScroll />} />
            <Route path="/transferList" element={<TransferList />} />
            <Route path="/countdownTimer" element={<CountDownTimer />} />
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

