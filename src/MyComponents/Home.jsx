import React from "react";

const Home = () => {
  return (
    <main className=" min-h-screen bg-gray-50 flex flex-col items-center justify-center bg-[url('/images/homeBG2.png')] bg-center bg-contain bg-no-repeat text-center px-6">
      <div className=" bg-white/40 p-6 rounded-xl shadow-lg mt-20">
        <h1 className=" text-4xl md:text-6xl font-bold mb-4 text-gray-800">
          Welcome to <span className=" text-blue-500">मेरोBookHub</span>
        </h1>
        <p className=" text-lg text-gray-600 py-2">
          Discover your favorite stories anytime, anywhere.
        </p>
        <div>
            <a href="/BookProfile" className=" bg-slate-300 hover:bg-white text-black font-semibold py-2 px-6 rounded-lg shadow-md transition">Browse Books</a>
        </div>
      </div>
    </main>
  );
};

export default Home;
