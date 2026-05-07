1) App.jsx

import React, { useState, useEffect } from "react";

const DataFetcher = () => {

  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch API Data
  const getUsers = async () => {

    setLoading(true);

    try {

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      if (!response.ok) {
        throw new Error("Unable to fetch data");
      }

      const result = await response.json();

      setUsers(result);
      setError(null);

    } catch (err) {

      setError(err.message);

    }

    setLoading(false);
  };

  // Load data on page load
  useEffect(() => {
    getUsers();
  }, []);

  // Search Filter
  const filteredUsers = search
    ? users.filter((user) =>
        user.name
          .toLowerCase()
          .includes(search.toLowerCase())
      )
    : users;

  return (
    <div>

      <h1>User Information</h1>

      {/* Error Message */}
      {error && (
        <div>
          Error: {error}
        </div>
      )}

      {/* Search Box */}
      <input
        type="text"
        placeholder="Search user..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Loading */}
      {loading ? (
        <div>Loading...</div>
      ) : (

        <table border="1" cellPadding="10">

          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>City</th>
            </tr>
          </thead>

          <tbody>

            {filteredUsers.length > 0 ? (

              filteredUsers.map((user) => (

                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.address.city}</td>
                </tr>

              ))

            ) : (

              <tr>
                <td colSpan="3">
                  No Users Found
                </td>
              </tr>

            )}

          </tbody>

        </table>
      )}

      {/* Refresh Button */}
      <button onClick={getUsers}>
        Refresh
      </button>

    </div>
  );
};

export default DataFetcher;

2) App.css

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  padding: 20px;
}

button {
  background-color: red;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  margin-top: 20px;
  cursor: pointer;
  font-weight: bold;
}

button:hover {
  opacity: 0.9;
}

.data-fetcher {
  width: 80%;
  margin: auto;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  color: #333;
}

.search-bar {
  text-align: center;
  margin: 20px 0;
}

.search-bar input {
  width: 60%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid black;
  border-radius: 4px;
}

table {
  width: 100%;
  margin-top: 20px;
  border-collapse: collapse;
}

table th,
table td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

table th {
  background-color: #f0f0f0;
}

.error {
  color: red;
  text-align: center;
  margin-top: 10px;
}

3) Main.jsx

import React from "react";
import ReactDOM from "react-dom/client";

import DataFetcher from "./App";

import "./App.css";

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <DataFetcher />
  </React.StrictMode>
);
