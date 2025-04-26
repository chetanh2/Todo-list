import React, { useEffect, useState } from 'react'

const ClientSidePagination = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const limitOptions = [5, 10, 20];

  // Fetch all users on mount
  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://dummyjson.com/users?limit=0");
        if (!response.ok) {
          throw new Error("Failed to fetch users.");
        }
        const data = await response.json();
        setAllUsers(data.users);
        setFilteredUsers(data.users);
      } catch (err) {
        setError("An error occurred while fetching users.");
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  // Handle search filtering
  useEffect(() => {
    const filtered = allUsers.filter((user) =>
      `${user.firstName} ${user.lastName}`
        .toLowerCase()
        .includes(search.toLowerCase())
    );
    setFilteredUsers(filtered);
    setPage(1); // Reset to first page on search
  }, [search, allUsers]);

  // Calculate paginated data
  const totalPages = Math.ceil(filteredUsers.length / limit);
  const startIndex = (page - 1) * limit;
  // Extract a subset of the filtered users based on the current page and limit.
  // The slice method is used to create a new array from the filtered users, starting
  // at the startIndex and ending at the startIndex + limit. This is our paginated data.
  const paginatedUsers = filteredUsers.slice(startIndex, startIndex + limit);

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  const handleLimitChange = (e) => {
    setLimit(Number(e.target.value));
    setPage(1); // Reset to first page when limit changes
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };
  console.log("filteredUsers", filteredUsers);
  
  return (
    <div className="container mx-auto p-6 max-w-7xl">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Users</h1>

      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <label htmlFor="search" className="text-gray-600 font-medium">
            Search:
          </label>
          <input
            id="search"
            type="text"
            value={search}
            onChange={handleSearchChange}
            placeholder="Search by name..."
            className="border rounded-lg px-3 py-2 w-full sm:w-64 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={loading}
          />
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="limit" className="text-gray-600 font-medium">
            Users per page:
          </label>
          <select
            id="limit"
            value={limit}
            onChange={handleLimitChange}
            className="border rounded-lg px-3 py-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={loading}
          >
            {limitOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      {error && (
        <p className="text-red-500 bg-red-50 p-3 rounded-lg mb-4">{error}</p>
      )}

      {loading ? (
        <p className="text-center mt-6 text-gray-500 animate-pulse">
          Loading...
        </p>
      ) : (
        <>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {paginatedUsers.map((user) => (
              <div
                key={user.id}
                className="border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {user.firstName} {user.lastName}
                </h2>
                <p className="text-gray-600 ">Email: {user.email}</p>
                <p className="text-gray-600">Age: {user.age}</p>
                <p className="text-gray-600">Gender: {user.gender}</p>
              </div>
            ))}
          </div>

          {paginatedUsers.length === 0 && !error && (
            <p className="text-center mt-6 text-gray-500">No users found.</p>
          )}

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8">
            <span className="text-lg font-medium text-gray-600">
              Page {page} of {totalPages}
            </span>
            <div className="flex justify-center gap-4">
              <button
                onClick={handlePrevPage}
                disabled={page === 1}
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                  page === 1
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                Previous
              </button>
              <button
                onClick={handleNextPage}
                disabled={page === totalPages}
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                  page === totalPages
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                Next
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ClientSidePagination