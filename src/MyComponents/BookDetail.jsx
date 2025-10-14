import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BookDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [borrowed, setBorrowed] = useState(false);
  const [wishlisted, setWishlisted] = useState(false);

  // Fetch data
  useEffect(() => {
    fetch("/booksData.json")
      .then((res) => res.json())
      .then((data) => {
        const foundBook = data.find((b) => String(b.id) === id);
        setBook(foundBook);
        setLoading(false);

        // Check localStorage for borrowed/wishlist
        const borrowedBooks = JSON.parse(localStorage.getItem("borrowedBooks")) || [];
        const wishlistBooks = JSON.parse(localStorage.getItem("wishlistBooks")) || [];
        setBorrowed(borrowedBooks.some((b) => b.id === foundBook?.id));
        setWishlisted(wishlistBooks.some((b) => b.id === foundBook?.id));
      })
      .catch((err) => {
        console.error("Error loading book data:", err);
        setLoading(false);
      });
  }, [id]);

  // --- Borrow Functions ---
  const handleBorrow = () => {
    const borrowedBooks = JSON.parse(localStorage.getItem("borrowedBooks")) || [];
    if (borrowedBooks.some((b) => b.id === book.id)) return alert("Already borrowed!");

    borrowedBooks.push({
      id: book.id,
      title: book.title,
      author: book.author,
      img: book.img,
      borrowedDate: new Date().toLocaleDateString(),
    });
    localStorage.setItem("borrowedBooks", JSON.stringify(borrowedBooks));
    setBorrowed(true);
    alert("Book added to borrowed list!");
  };

  const handleRemoveBorrow = () => {
    const borrowedBooks = JSON.parse(localStorage.getItem("borrowedBooks")) || [];
    const updated = borrowedBooks.filter((b) => b.id !== book.id);
    localStorage.setItem("borrowedBooks", JSON.stringify(updated));
    setBorrowed(false);
    alert("Book removed from borrowed list!");
  };

  // --- Wishlist Functions ---
  const handleWishlist = () => {
    const wishlistBooks = JSON.parse(localStorage.getItem("wishlistBooks")) || [];
    if (wishlistBooks.some((b) => b.id === book.id)) return alert("Already in wishlist!");

    wishlistBooks.push({
      id: book.id,
      title: book.title,
      author: book.author,
      img: book.img,
    });
    localStorage.setItem("wishlistBooks", JSON.stringify(wishlistBooks));
    setWishlisted(true);
    alert("Book added to wishlist!");
  };

  const handleRemoveWishlist = () => {
    const wishlistBooks = JSON.parse(localStorage.getItem("wishlistBooks")) || [];
    const updated = wishlistBooks.filter((b) => b.id !== book.id);
    localStorage.setItem("wishlistBooks", JSON.stringify(updated));
    setWishlisted(false);
    alert("Book removed from wishlist!");
  };

  if (loading)
    return <div className="text-center py-20 text-gray-500">Loading book details...</div>;
  if (!book)
    return <div className="text-center py-20 text-gray-500">Book not found.</div>;

  // --- Rating UI ---
  const renderStars = (rating) => {
    const fullStar = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStar = 5 - fullStar - (halfStar ? 1 : 0);

    return (
      <>
        {Array(fullStar)
          .fill()
          .map((_, i) => (
            <i key={`full-${i}`} className="fa fa-star text-yellow-400"></i>
          ))}
        {halfStar && <i key="half" className="fa fa-star-half-o text-yellow-400"></i>}
        {Array(emptyStar)
          .fill()
          .map((_, i) => (
            <i key={`empty-${i}`} className="fa fa-star-o text-yellow-400"></i>
          ))}
      </>
    );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto my-12 px-6 gap-8 place-items-center">
      {/* Left Side --> Image + Rating */}
      <div>
        <img
          src={book.img}
          alt={book.name}
          className="w-full h-120 max-w-sm rounded-md shadow-md"
        />
        <div className="flex items-center mt-3">
          <span className="mr-2 text-gray-700">Rating:</span>
          {renderStars(book.rating)}
          <span className="ml-2 text-gray-600 text-sm">
            ({book.rating?.toFixed(1)})
          </span>
        </div>
      </div>

      {/* Right Side --> Details */}
      <div>
        <h1 className="font-serif text-3xl mb-2">{book.title}</h1>
        <p className="text-gray-700 mb-2">
          Author: <span className="font-medium">{book.author}</span>
        </p>
        <p className="text-gray-600 mb-4 leading-relaxed">{book.description}</p>
        <p className="text-gray-700">
          Genre: <span className="font-medium">{book.genre}</span>
        </p>
        <p className="text-gray-700">
          Published: <span className="font-medium">{book.published}</span>
        </p>
        <br />

        {/* Buttons */}
        <div className="flex flex-wrap gap-4">
          {borrowed ? (
            <button
              onClick={handleRemoveBorrow}
              className="border-2 border-red-600 text-red-600 px-4 py-1 rounded-md hover:bg-red-600 hover:text-white transition"
            >
              Remove from Borrowed
            </button>
          ) : (
            <button
              onClick={handleBorrow}
              className="border-2 border-blue-600 text-blue-600 px-4 py-1 rounded-md hover:bg-blue-600 hover:text-white transition"
            >
              Borrow Book
            </button>
          )}

          {wishlisted ? (
            <button
              onClick={handleRemoveWishlist}
              className="border-2 border-red-500 text-red-500 px-4 py-1 rounded-md hover:bg-red-500 hover:text-white transition"
            >
              Remove from Wishlist
            </button>
          ) : (
            <button
              onClick={handleWishlist}
              className="border-2 border-pink-500 text-pink-500 px-4 py-1 rounded-md hover:bg-pink-500 hover:text-white transition"
            >
              Add to Wishlist
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookDetail;

