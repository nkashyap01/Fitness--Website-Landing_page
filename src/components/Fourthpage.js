import React from "react";

const Fourthpage = () => {
  return (
    <div className=" m-8 h-[720px]">
      <div className="text-center">
        <h1 className=" font-semibold">
          {" "}
          <span className="text-[#FF7917] font-semibold"> - </span>
          Our Trainer
        </h1>
        <h1 className="text-xl font-semibold mt-2">
          <span className="text-[#FF7917] ">World Class </span> Fitness
        </h1>
        <h1 className="text-xl font-semibold  -mt-1">
          {" "}
          Trainer At Your Fingertips!
        </h1>
      </div>
      <div className="text-center relative top-[200px] ">
        <p className="text-4xl font-bold text-[#FF7917] mb-5 "> Contact US</p>
        <p className="text-xl text-[#64748B]">
          The most powerful finance software that connects
          <br /> with your financial accounts. Track spending and <br />
          categorize expenses so you can see where your <br />
          money is going.{" "}
        </p>
        <button className=" mt-[20px] bg-[#FF7917] w-[197px] h-[52px] rounded-[30px] text-white py-[6px] ">
          {" "}
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Fourthpage;
