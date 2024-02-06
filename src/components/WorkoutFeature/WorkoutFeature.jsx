import React from "react";
import firsticon from "../../Assests/workout-icon-1.png";
import secondicon from "../../Assests/workout-icon-2.png";
import thirdicon from "../../Assests/wokout-icon-3.png";
import fourthicon from "../../Assests/workout-icon-4.png";
import Heading from "./Heading";
import CardIteration from "./CardIteration";

const WorkoutFeature = () => {
  const sixthArrayItem = [
    {
      head: "category",
      icon: firsticon,
      name: "category",
      secondicon: secondicon,
    },
    {
      head: "Trainer",
      icon: thirdicon,
      name: "All",
      secondicon: secondicon,
    },
    {
      head: "Price Range",
      icon: fourthicon,
      name: "$100-$200",
      secondicon: secondicon,
    },
  ];
  return (
    <div className="mt-5">
      <div className="text-center">
        <h1 className=" font-semibold">
          {" "}
          <span className="text-[#FF7917] font-semibold text-xl"> - </span>
          750+ Workout Activity
        </h1>
        <h1 className="text-2xl font-semibold -mt-1">
          <span className="text-[#FF7917] "> Our Featured</span> Workout
        </h1>
      </div>
      <div className="flex justify-center items-center">
        <div className=" px-8 flex pt-2 justify-between  border-x-2 border-t-2 border-[#FF7917] w-[1300px]  items-center">
          {sixthArrayItem.map(({ head, name, icon, secondicon }, index) => {
            return (
              <Heading
                head={head}
                icon={icon}
                name={name}
                secondicon={secondicon}
              />
            );
          })}
          <button className="bg-[#FF7917] text-white rounded-[30px] w-[89px] h-[38px]">
            {" "}
            Search
          </button>
        </div>
      </div>
      <CardIteration />
    </div>
  );
};

export default WorkoutFeature;
