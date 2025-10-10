import React from "react";

const Footer = () => {
  return (
    <footer className=" w-full bg-gray-900 text-gray-300 py-6">
      <div className=" max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left side -- Copyright */}
        <p className=" text-sm text-gray-400">
          &copy; {new Date().getFullYear()}{" "}
          <span className=" font-semibold text-blue-400">KusanKhambu</span>. All
          rights reserved.
        </p>

        {/* Right side -- Links */}
        <ul className="flex gap-10 text-sm">
          <li>
            <a
              href="/contact"
              className= "hover:text-white hover:underline transition"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="/sources"
              className=" hover:text-white hover:underline transition"
            >
              Sources
            </a>
          </li>
          <li>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-white hover:underline transition"
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
