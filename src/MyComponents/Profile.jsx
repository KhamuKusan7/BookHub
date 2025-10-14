import React, { useState, useEffect } from "react";

const Profile = () => {
  //  Simulated static user data
  const [user, setUser] = useState({
    name: "Lionel Messi",
    email: "Messi10@example.com",
    joined: "Oct 2025",
    profilePic: "https://cdn-icons-png.flaticon.com/512/149/149071.png", // default profile pic
  });

  // Load borrowed & wishlist books from localStorage
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const storedBorrowed =
      JSON.parse(localStorage.getItem("borrowedBooks")) || [];
    const storedWishlist =
      JSON.parse(localStorage.getItem("wishlistBooks")) || [];
    setBorrowedBooks(storedBorrowed);
    setWishlist(storedWishlist);
  }, []);

  return (
    <div className=" max-w-6xl mx-auto mt-12 px-6 py-8">
      {/* Profile Header */}
      <div className=" flex flex-col md:flex-row items-center md:items-start bg-white shadow-md p-6 rounded-2xl gap-6">
        <img
          src={user.profilePic}
          alt={user.name}
          className=" w-32 h-32 rounded-full border-4 border-gray-200 shadow-sm"
        />
        <div>
          <h1 className=" text-3xl font-semibold text-gray-800">{user.name}</h1>
          <p className=" text-gray-600">{user.email}</p>
          <p className=" text-sm text-gray-500 mt-1">Joined: {user.joined}</p>
          <div className=" mt-4 flex gap-6">
            <div>
              <p className=" text-gray-800 font-semibold">
                {borrowedBooks.length}
              </p>
              <p className=" text-gray-500 text-sm">Borrowed</p>
            </div>
            <div>
              <p className=" text-gray-800 font-semibold">{wishlist.length}</p>
              <p className=" text-gray-500 text-sm">Wishlist</p>
            </div>
          </div>
        </div>
      </div>

      {/* Borrowed Books */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Borrowed Books
        </h2>
        {borrowedBooks.length === 0 ? (
          <p className="text-gray-500">You haven't borrowed any books yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {borrowedBooks.map((book) => (
              <div
                key={book.id}
                className="bg-white shadow-md p-4 rounded-xl border hover:shadow-lg transition"
              >
                <img
                  src={book.img}
                  alt={book.title}
                  className="w-full h-48 object-cover rounded-lg mb-3"
                />
                <h3 className="font-semibold text-gray-800">{book.title}</h3>
                <p className="text-sm text-gray-500">{book.author}</p>
                <p className="text-sm text-gray-600 mt-2">
                  Borrowed on:{" "}
                  <span className="font-medium">
                    {book.borrowedDate || "—"}
                  </span>
                </p>
                <button
                  onClick={() => {
                    const updated = borrowedBooks.filter(
                      (b) => b.id !== book.id
                    );
                    setBorrowedBooks(updated);
                    localStorage.setItem(
                      "borrowedBooks",
                      JSON.stringify(updated)
                    );
                  }}
                  className="mt-3 border border-red-600 text-red-600 px-3 py-1 text-sm rounded-md hover:bg-red-600 hover:text-white transition"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Wishlist */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Wishlist</h2>
        {wishlist.length === 0 ? (
          <p className="text-gray-500">Your wishlist is empty.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlist.map((book) => (
              <div
                key={book.id}
                className="bg-white shadow-md p-4 rounded-xl border hover:shadow-lg transition"
              >
                <img
                  src={book.img}
                  alt={book.title}
                  className="w-full h-48 object-cover rounded-lg mb-3"
                />
                <h3 className="font-semibold text-gray-800">{book.title}</h3>
                <p className="text-sm text-gray-500">{book.author}</p>
                <button
                  onClick={() => {
                    const updated = wishlist.filter((b) => b.id !== book.id);
                    setWishlist(updated);
                    localStorage.setItem(
                      "wishlistBooks",
                      JSON.stringify(updated)
                    );
                  }}
                  className="mt-3 border border-red-600 text-red-600 px-3 py-1 text-sm rounded-md hover:bg-red-600 hover:text-white transition"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
