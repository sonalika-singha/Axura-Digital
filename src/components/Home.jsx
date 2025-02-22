import React from "react";
import "./css/Home.css";
const Home = () => {
  return (
    <div className="home  w-full justify-center flex flex-col items-center">
      <div className="tagline text-center font-semibold py-10">
        {/* <p className="text-[#364bfe] font-bold">Social Media Marketing</p> */}
        <p className=" text-7xl ">
          Partner with award <br />
          winning <span className="text-[#364bfe] italic">Design Agency </span>
        </p>
      </div>
      <div className="tagline-about text-center text-xl">
        <p className="text-[#333333]">
        We partner with you to craft a successful business model that <br/> authentically reflects your unique vision while achieving your desired <br /> conversion goals.
        </p>
      </div>
      <button className="btn-started text-center font-semibold text-white px-8 py-3 mt-10 text-xl">
        Get Started
      </button>
      <div className="home-container bg-black flex justify-center mt-10">
        <img src="./home.jpg" alt="" className="home-img" />
      </div>
    </div>
  );
};

export default Home;
