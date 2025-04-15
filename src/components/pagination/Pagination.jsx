import { useEffect, useState } from "react";

const Pagination = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);

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
      if (newData.length < 10) {
        setHasMore(false);
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
    fetchPosts(page);
  }, [page]);

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

  return (
    <div className="container mx-auto p-4 mt-10">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>

      {error && <p className="text-red-500">{error}</p>}

      <div className="grid gap-4">
        {data.map((post) => (
          <div key={post.id} className="border p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>

      {loading && <p className="text-center mt-4">Loading...</p>}

      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={handlePrevPage}
          disabled={page === 1 || loading}
          className={`px-4 py-2 rounded ${
            page === 1 || loading
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600 text-white"
          }`}
        >
          Previous
        </button>
        <span className="text-lg">Page {page}</span>
        <button
          onClick={handleNextPage}
          disabled={loading || !hasMore}
          className={`px-4 py-2 rounded ${
            loading || !hasMore
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600 text-white"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};
export default Pagination