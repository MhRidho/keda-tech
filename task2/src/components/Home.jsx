import React from "react";
import { peopleChart } from "../asset/index";

const Home = () => {
  return (
    <div className="w-full h-screen home bg-no-repeat bg-cover bg-left md:bg-center flex  items-center px-5 lg:px-[72px]">
      <div className="max-w-[450px] md:max-w-[500px] lg:max-w-[600px] flex flex-col gap-7">
        <h1 className="font-bold text-[16px] lg:text-[20px] text-[#6C63FF]">
          GET A BETTER ADVICE
        </h1>
        <h1 className="text-[30px] md:text-[40px] lg:text-[50px] font-bold">
          Let's Find a Best Product Around the World
        </h1>
        <p className="text-text text-[14px] lg:text-[18px]">
          We develop an app to allow you to improve your product better and get
          a life you want to life
        </p>
        <div>
          <button className="py-2 px-8 bg-[#6C63FF] rounded-full text-white font-semibold">
            Learn More
          </button>
        </div>
      </div>

      <div className="max-w-[450px] md:max-w-[500px] lg:max-w-[600px] flex flex-col gap-7">
        <img src={peopleChart} alt="peopleChart" />
      </div>
    </div>
  );
};

export default Home;
