import React from "react";

const FitnessCard = ({ icon, title, description }) => {
  return (
    <div className=" flex flex-col items-center justify-center w-[250px] h-[210px] gap-[20px] ">
      <img src={icon} alt=" " />
      <h1 className="text-[#FF7917] font-bold "> {title}</h1>
      <p className="text-xs text-center "> {description}</p>
    </div>
  );
};

export default FitnessCard;
