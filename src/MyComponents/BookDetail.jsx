import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BookDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch book's data dynamically from public/booksData.json
  useEffect(() => {
    fetch("/booksData.json")
      .then((res) => res.json())
      .then((data) => {
        const foundBook = data.find((b) => b.id === id);
        setBook(foundBook);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading book data:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className=" text-center py-20 text-gray-500">Loading book details...</div>;
  }

  if (!book) {
    return <div className=" text-center py-20 text-gray-500">Book not found.</div>;
  }

  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto my-12 px-6 gap-8 place-items-center">
      {/* Left Side --> Image + Rating */}
      <div>
        <img
          src={book.img}
          alt={book.name}
          className=" w-full h-120 max-w-sm rounded-md shadow-md"
        />
        <div className=" flex items-center mt-3">
          <span className=" mr-2 text-gray-700">Rating:</span>
          <span className=" ml-2 text-gray-600 text-sm">({book.rating.toFixed(1)})</span>
        </div>
      </div>

      {/* Right Side --> Details */}
      <div>
        <h1 className=" font-serif text-3xl mb-2">{book.title}</h1>
        <p className=" text-gray-700 mb-2">
          Author: <span className=" font-medium">{book.author}</span>
        </p>
        <p className=" text-gray-600 mb-4 leading-relaxed">{book.description}</p>
        <p className=" text-gray-700">
          Genre: <span className="font-medium">{book.genre}</span>
        </p>
        <p className=" text-gray-700">
          Published: <span className="font-medium">{book.published}</span>
        </p>
        <br />
        <button className=" border-2 border-gray-700 px-4 py-1 rounded-md hover:bg-gray-900 hover:text-white transition">
          Read Book <i className=" fa fa-arrow-right ml-1"></i>
        </button>
      </div>
    </div>
  );
};

export default BookDetail;
