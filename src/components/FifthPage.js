import React from "react";
import Rectanglepic from "../Assests/Rectangle 10.png";

const FifthPage = () => {
  return (
    <div className=" mt-8 ">
      <div className="text-center">
        <h1 className=" font-semibold">
          {" "}
          <span className="text-[#FF7917] font-semibold text-xl"> - </span>
          App Demo
        </h1>
        <h1 className="text-2xl font-semibold mt-2">
          <span className="text-[#FF7917] ">View Our </span> App Demo
        </h1>
      </div>
      <div className="flex items-center justify-center -pt-5 ">
        <img src={Rectanglepic} alt="" />
      </div>
    </div>
  );
};

export default FifthPage;
