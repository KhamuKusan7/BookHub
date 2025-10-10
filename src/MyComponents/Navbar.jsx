import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className=" bg-green-400">
      <nav className=" w-full px-6 py-3 flex items-center justify-between">
        {/* Logo on left */}
        <div className=" flex-shrink-0">
          <h1 className=" text-xl font-bold tracking-wide">
            <Link to="/">मेरोBookHub</Link>
          </h1>
        </div>

        {/* Navigation Links on center */}
        <ul className=" flex-1 flex justify-center gap-8 text-sm font-medium items-center">
          <li>
            <Link to="/" className=" hover:text-gray-100 transition duration-200">
              Home
            </Link>
          </li>
          <li>
            <Link to="/BookProfile" className=" hover:text-gray-100 transition duration-200">
              Books
            </Link>
          </li>
          <li>
            <Link to="" className=" hover:text-gray-100 transition duration-200">
              Profile
            </Link>
          </li>
        </ul>

        {/* Logout on right-side */}
        <div>
          <button className=" bg-black text-white px-3 py-1 rounded-full hover:bg-red-600 transition duration-200">
            Logout
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

