import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BookProfile = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch data from local json file
  useEffect(() => {
    fetch("/booksData.json")
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((err) => console.error("Error loading books:", err));
  }, []);

  // Filter books based on search
  const filteredBooks = books.filter((book) =>
    book.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className=" min-h-screen bg-gray-50 px-6 py-10">
      {/* Search Section */}
      <div className=" flex justify-center mb-10">
        <div className=" relative w-full max-w-md">
          <i className=" fa fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
          <input
            type="text"
            placeholder="Search book..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className=" w-full py-2 pl-10 pr-4 rounded-xl border-2 border-blue-300 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400 bg-white"
          />
        </div>
      </div>

      {/* Book Grid */}
      <div className=" max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-8 place-items-center">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <Link key={book.id} to={`/book/${book.id}`}>
              <div className=" w-48 flex flex-col items-center text-center hover:scale-105 transition-transform">
                <img
                  src={book.img}
                  alt={book.name}
                  className=" rounded-lg shadow-md object-cover w-full h-72"
                />
                <span className=" mt-3 font-serif text-gray-700">{book.name}</span>
              </div>
            </Link>
          ))
        ) : (
          <p className=" text-gray-500 mt-6 text-center col-span-full">No books found for "{searchTerm}"</p>
        )}
      </div>
    </div>
  );
};

export default BookProfile;
