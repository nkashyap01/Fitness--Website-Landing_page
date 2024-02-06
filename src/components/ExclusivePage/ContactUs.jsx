import React from "react";
import firstimage from "../../Assests/fourth-p-p-1.png";
import secondimage from "../../Assests/fourth-p-p-2.png";
import thirdimage from "../../Assests/fourth-p-p-3.png";
import fourthimage from "../../Assests/fourth-p-p-4.png";
import fifthimage from "../../Assests/fourth-p-p-5.png";
import sixthimage from "../../Assests/fourth-p-p-6.png";

const ContactUs = () => {
  return (
    <div className=" m-8 h-[720px] relative">
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
     <div className="flex justify-around ml-60 w-[60vw] items-center ">
      <img src={firstimage }  className="h-[130px] w-[130px]"/>
      <img src={secondimage} className="w-[108px] h-[108px]"/>
     </div>
     <div className="absolute flex justify-around w-full mt-10 ">
      <img src={sixthimage}  className="w-[174px] h-[174px] -ml-5"/>
      <img src={thirdimage} className="relative top-24 left-10"/>
     </div>
     <div className="absolute bottom-2 w-[80vw] flex justify-around ml-5">
      <img src={fifthimage} className="h-[107px] w-[107px] relative -top-20 left-16" />
      <img src={fourthimage} className="h-[130px] w-[130px] relative right-4"/>
     </div>
      <div className="text-center relative top-[50px] ">
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

export default  ContactUs ;
