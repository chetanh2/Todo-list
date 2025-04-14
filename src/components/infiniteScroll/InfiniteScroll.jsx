import React, { useEffect, useState } from 'react'
import { MovieCard } from './MovieCard';
import "./infiniteScroll.css";

const InfiniteScroll = () => {
  const [page, setPage] = useState(1); // for number of page in tmdb
  const [data, setData] = useState([]); // storing the fetched data
  const [loading, setLoading] = useState(false); //
  const [error, setError] = useState("");

  const fetchPosts = async (pageNum) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${pageNum}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data.");
      }
      const newData = await response.json();
      setData((prevData) => [...prevData, ...newData]);
    } catch (err) {
      setError("An error occurred while fetching data.");
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  useEffect(() => {
    fetchPosts(page);
  }, [page]);
  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.scrollHeight - 300 &&
      !loading // Prevent fetching if already loading
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  };
  // Debounce function
  function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  }

  // Attach scroll listener with debounce
  useEffect(() => {
    const debouncedHandleScroll = debounce(handleScroll, 500);
    window.addEventListener("scroll", debouncedHandleScroll);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll);
    };
  }, [loading]); // Re-run if loading changes to ensure listener updates
  return (
    <div>
      <header className="App-header">
        Popular movies according to Tmdb
        <div className="movieCardContainer">
          {data.length > 1 &&
            data.map((item) => {
              return (
                <MovieCard
                  key={item.id}
                  title={item.original_title}
                  description={item.body}
                />
              );
            })}
          {loading && <h1>Loading....</h1>}
        </div>
      </header>
    </div>
  );
}

export default InfiniteScroll