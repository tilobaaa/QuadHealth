import React from "react";

const Home = () => {
  return (
    <div>
      <div className="relative">
        <input
          type="text"
          id="name"
          placeholder="Name"
          className="peer w-full border border-primary-400 rounded px-2 py-4 focus:outline-none focus:ring-2 focus:ring-primary-200 placeholder-transparent"
        />
        <label
          htmlFor="name"
          className="absolute left-2 -top-2 bg-white px-1  text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-primary-500"
        >
          Name
        </label>
      </div>
    </div>
  );
};

export default Home;
