import React from "react";
import { Link } from "react-router-dom";

const BookProfile = () => {
  const BookCover = [
    {
      name: "Bhagavad Gita",
      img: "/images/Books/BhagavadGita.webp",
      link: "BhagavadGita",
    },
    { name: "Ramayana", img: "/images/Books/Ramayana.jpg",link:"Ramayana"},
    { name: "Mahabharat", img: "/images/Books/Mahabharat.jpg" },
    {
      name: "The Pursuit of Happyness",
      img: "/images/Books/PursuitOfHappyness.jpg",
    },
    {
      name: "Harry Potter and the Philosopher's Stone",
      img: "/images/Books/HarryPotter1.jpg",
      link: "HarryPotter1",
    },
    {
      name: "Harry Potter and the Chamber of Secrets",
      img: "/images/Books/HarryPotter2.jpg",
    },
    {
      name: "Harry Potter and the Prisoner of Azkaban",
      img: "/images/Books/HarryPotter3.jpg",
    },
    {
      name: "Harry Potter and the Goblet of Fire",
      img: "/images/Books/HarryPotter4.jpg",
    },
    {
      name: "Harry Potter and the Order of the Phoenix",
      img: "/images/Books/HarryPotter5.jpg",
    },
    {
      name: "Harry Potter and the Half-Blood Prince",
      img: "/images/Books/HarryPotter6.jpg",
    },
    {
      name: "Harry Potter and the Deathly Hallows: Part 1",
      img: "/images/Books/HarryPotter7.jpg",
    },
    {
      name: "Harry Potter and the Deathly Hallows: Part 2",
      img: "/images/Books/HarryPotter8.jpg",
    },
    {
      name: "The Lord of The Rings",
      img: "/images/Books/TheLordOfTheRings.jpg",
    },
    {
      name: "The Chronicles of Narnia",
      img: "/images/Books/ChroniclesofNarnia.jpg",
    },
    { name: "एक चिहान (Ek Chihan)", img: "/images/Books/ekChihan.jpg" },
    { name: "मुनामदन (Muna Madan)", img: "/images/Books/MunaMadan.jpg" },
    { name: "Rich Dad Poor Dad", img: "/images/Books/RichDadPoorDad.jpg" },
    { name: "Shireesh ko Phool", img: "/images/Books/Shireesh-ko-Phool.webp" },
    { name: "The Great Gatsby", img: "/images/Books/GreatGatsby.jpg" },
    {
      name: "Alex Ferguson: My Autobiography",
      img: "/images/Books/AlexFerguson.jpg",
    },
  ];
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      {/* Search Section */}
      <div className="flex justify-center mb-10">
        <div className="relative w-full max-w-md">
          <i className="fa fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
          <input
            type="text"
            placeholder="Search book..."
            className="w-full py-2 pl-10 pr-4 rounded-xl border-2 border-blue-300 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400 bg-white"
          />
        </div>
      </div>

      {/* Book Grid */}
      <div className=" max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-8 place-items-center">
        {BookCover.map((b) => (
          <Link to={`/${b.link}`}>
            <div
              key={b.name}
              className="w-48 flex flex-col items-center text-center hover:scale-105 transition-transform"
            >
              <img
                src={b.img}
                alt={b.name}
                className="rounded-lg shadow-md object-cover w-full h-75"
              />
              <span className="mt-3 font-serif text-gray-700">{b.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BookProfile;
