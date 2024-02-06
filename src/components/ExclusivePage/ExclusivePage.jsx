import React from "react";
import ficon from "../../Assests/3-p-i-1.png";
import sicon from "../../Assests/3-p-i-2.png";
import ticon from "../../Assests/3-p-i-3.png";
import fricon from "../../Assests/3-p-i-4.png";
import FitnessCard from "./FitnessCard";
import Navbar from "./Navbar";

const ExclusivePage = () => {
  const thirdArrayItem = [
    {
      icon: ficon,
      title: "Time Efficiency",
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took",
    },
    {
      icon: sicon,
      title: "Personalized Workouts",
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took",
    },
    {
      icon: ticon,
      title: "Cost Saving",
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took",
    },
    {
      icon: fricon,
      title: "Fast And Accurate",
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="flex justify-between mt-24 mx-8">
        <div className="w-6/12 ">
          <p className="font-bold">
            <span className="text-[#FF7917]"> -</span> Benefits OF Fitness App
          </p>
          <p className="text-[#FF7917]  text-xl font-semibold">
            {" "}
            Exclusive Benfits
          </p>
          <p className=" text-xl  -mt-1 font-semibold"> Of Fitness App</p>
        </div>
        <div className="w-6/12 flex justify-end   items-center">
          <p className="text-xs  border-l-[1.5px] border-black h-[46px] pl-2">
            {" "}
            Lorem Ipsum has been the industry's standard dummy <br /> text ever
            since the 1500s, when an unknown printer took
          </p>
        </div>
      </div>
      <div className="flex justify-between mx-8 ">
        {thirdArrayItem.map(({ icon, title, description }, index) => {
          return (
            <FitnessCard icon={icon} title={title} description={description} />
          );
        })}
      </div>
    </div>
  );
};

export default ExclusivePage;
