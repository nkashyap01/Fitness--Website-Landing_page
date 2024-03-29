import React from "react";
import Rectanglepic from "../Assests/Rectangle 10.png";
import playbutton from "../Assests/play-button.png";

const AppDemo = () => {
  return (
    <div className=" mt-8 ">
      <div className="text-center">
        <h1 className=" font-semibold">
          {" "}
          <span className="text-[#FF7917] font-semibold text-xl"> - </span>
          App Demo
        </h1>
        <h1 className="text-2xl font-semibold">
          <span className="text-[#FF7917] ">View Our </span> App Demo
        </h1>
      </div>
      <div className="flex items-center justify-center -pt-5 relative top-2">
        <img src={Rectanglepic} alt="" />

        <img className="absolute top-[185px]" src={playbutton} />
      </div>
    </div>
  );
};

export default AppDemo;
