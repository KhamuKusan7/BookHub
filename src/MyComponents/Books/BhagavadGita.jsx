import React from "react";

const BhagavadGita = () => {
  return (
    <div className=" grid grid-cols-2 max-w-6xl place-items-center">
      <div className="max-w-6xl mx-auto my-8">
        <img
          src="/images/Books/BhagavadGita.webp"
          alt="Bhagavad Gita"
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
        <h1 className=" font-serif text-3xl">Bhagavad Gita</h1>
        <p>
          Author: <span>A.C. Bhaktivedanta Swami Prabhupada</span>
        </p>
        <br />
        <div>
          <p>
            Bhagavad Gita As It Is (श्रीमद्भगवद्गीता यथारूप) by A.C.
            Bhaktivedanta Swami Prabhupada is a sacred scripture that presents
            the divine conversation between Lord Krishna and Arjuna on the
            battlefield of Kurukshetra. Through this dialogue, Krishna imparts
            timeless wisdom about duty, devotion, and the nature of the soul.
            This edition offers both the original Sanskrit verses and their
            translations with detailed explanations that connect ancient
            philosophy to modern life. It teaches the path of self-realization,
            detachment, and ultimate surrender to the Supreme.
          </p>
          <br />
          <p>
            Genre: <span>Spiritual, Philosophy, Religious, Self-Help, Classic Literature</span>
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

export default BhagavadGita;
