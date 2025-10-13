import React from "react";

const Ramayana = () => {
  return (
    <div className="grid grid-cols-2 place-items-center max-w-6xl">
      <div className="max-w-6xl mx-auto my-8">
        <img
          src="/images/Books/Ramayana.jpg"
          alt="Ramayana"
          className="w-full h-120 rounded-sm"
        />
        <div className=" flex items-center">
          <span>Rating:</span>
          <i className="fa fa-star text-yellow-400"></i>
          <i className="fa fa-star text-yellow-400"></i>
          <i className="fa fa-star text-yellow-400"></i>
          <i className="fa fa-star text-yellow-400"></i>
          <i className="fa fa-star-o text-yellow-400"></i>
          <span className="ml-2 text-gray-600">(4.0)</span>
        </div>
      </div>
      <div>
        <h1 className=" font-serif text-3xl">Ramayana</h1>
        <p>
          Author: <span>Valmiki</span>
        </p>
        <div>
          <p>
            The Ramayana by Valmiki is one of the two great Sanskrit epics of
            ancient India. It tells the story of Prince Rama, an incarnation of
            the god Vishnu, who embarks on a heroic quest to rescue his wife
            Sita after she is abducted by the demon king Ravana. The epic
            explores themes of dharma (duty and righteousness), loyalty, honor,
            and the triumph of good over evil. Spanning about 24,000 verses, the
            Ramayana not only narrates a timeless tale of love and virtue but
            also serves as a moral and spiritual guide for generations.
          </p>
          <p>
            Genre: <span>Spiritual, Hindu Scripture, Religious, Mythology</span>
          </p>
          <button
            type="submit"
            className=" cursor-pointer border-2 rounded-lg px-1"
          >
            Read book <i className="fa fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ramayana;
