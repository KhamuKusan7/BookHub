import React from "react";

const HarryPotter1 = () => {
  return (
    <div className=" grid grid-cols-2 max-w-6xl place-items-center">
      <div className="max-w-6xl mx-auto my-8">
        <img
          src="/images/Books/HarryPotter1.jpg"
          alt="Harry Potter and the Philosopher's Stone"
          className="w-full h-120 rounded-sm"
        />
          <div className="flex items-center">
            <span>Rating:</span>
            <i className="fa fa-star text-yellow-400"></i>
            <i className="fa fa-star text-yellow-400"></i>
            <i className="fa fa-star text-yellow-400"></i>
            <i className="fa fa-star text-yellow-400"></i>
            <i className="fa fa-star-o text-yellow-400"></i> {/* Empty star */}
            {/* <i class="fa fa-star-half-o"></i>  ///////half star */}
            <span className="ml-2 text-gray-600 text-sm">(4.0)</span>
          </div>
      </div>
      <div>
        <h1 className=" font-serif text-3xl">
          Harry Potter and the Philosopher's Stone
        </h1>
        <p>
          Author: <span>J.K.Rowling</span>
        </p>
        <br />
        <div>
          <p>
            Harry Potter and the Philosopher's Stone follows the story of a
            young boy who discovers he's a wizard and attends Hogwarts School of
            Witchcraft and Wizardry. There, he makes friends, learns magic, and
            uncovers a dark secret about powerful stone and his past. An
            incredible adventure is about to begin!
          </p>
          <br />
          <p>
            Genre: <span>Fantasy, Fiction, Magic Adventure, Coming-of-Age</span>
          </p>
          <p>
            Published: <span>June 26, 1997</span>
          </p>
          <br />
          <button
            type="submit"
            className=" cursor-pointer border-2 border-solid rounded-lg px-1"
          >
            Read book <i className="fa fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HarryPotter1;
