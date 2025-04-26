import { useEffect, useState } from "react";

const Pagination = () => {
  const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const limitOptions = [3,5, 10, 20];

  const fetchPosts = async (pageNum, limitNum) => {
    setLoading(true);
    try {
      // const response = await fetch(
      //   `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${pageNum}`
      // );
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=${limitNum}&_page=${pageNum}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data.");
      }
      const newData = await response.json();
      if (newData.length < limitNum) {
        setHasMore(false);
      } else {
        setHasMore(true);
      }
      //   setData((prevData) => [...prevData, ...newData]); // to contain previous data as well as new data
      setData(newData);
    } catch (err) {
      setError("An error occurred while fetching data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts(page,limit);
  }, [page,limit]);

  const handleNextPage = () => {
    if (!loading && hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (page > 1 && !loading) {
      setPage((prevPage) => prevPage - 1);
    }
  };
  const handleLimitChange = (e) => {
    setLimit(Number(e.target.value));
    setPage(1); // Reset to first page when limit changes
    setHasMore(true); // Reset hasMore when limit changes
  };

  return (
    <section className="bg-[#282C34] ">

      <div className="container mx-auto p-6 max-w-6xl ">
        <h1 className="text-3xl font-bold mb-6 text-white">Posts</h1>

        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <label htmlFor="limit" className="text-white font-medium">
              Posts per page:
            </label>
            <select
              id="limit"
              value={limit}
              onChange={handleLimitChange}
              className="border rounded-lg px-3 py-2 bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={loading}
            >
              {limitOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <span className="text-lg font-medium text-white">Page {page}</span>
        </div>

        {error && (
          <p className="text-red-500 bg-red-50 p-3 rounded-lg mb-4">{error}</p>
        )}

        <div className="grid gap-6">
          {data.map((post) => (
            <div
              key={post.id}
              className="border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <h2 className="text-xl font-semibold text-gray-300 mb-2 capitalize">
                {post.title}
              </h2>
              <p className="text-white">{post.body}</p>
            </div>
          ))}
        </div>

        {loading && (
          <p className="text-center mt-6 text-gray-500 animate-pulse">
            Loading...
          </p>
        )}

        {!loading && data.length === 0 && !error && (
          <p className="text-center mt-6 text-gray-500">No posts found.</p>
        )}

        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={handlePrevPage}
            disabled={page === 1 || loading}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              page === 1 || loading
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            Previous
          </button>
          <button
            onClick={handleNextPage}
            disabled={loading || !hasMore}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              loading || !hasMore
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};
export default Pagination

