import React from "react";
import firstpic from "../../Assests/trainer-pic-1.png";
import secondpic from "../../Assests/trainer-pic-2.png";
import thirdpic from "../../Assests/trainer-pic-3.png";
import starIcon from "../../Assests/staricon.png";

const TraincerCard = () => {
  const cardItems = [
    {
      cardpic: firstpic,
    },
    {
      cardpic: secondpic,
    },
    {
      cardpic: thirdpic,
    },
  ];
  return (
    <div className="flex justify-between py-3 px-5">
      {cardItems.map(({ cardpic }, index) => {
        return (
          <div className="h-[294px] bg-[#F9FAFB] shadow-lg rounded-md w-[305px] pb-2">
            <img src={cardpic} alt="" />
            <div className="flex justify-between  px-4 ">
              <h1 className="text-xl">Albert Laangster</h1>
              <div className="flex  items-center ">
                <img src={starIcon} alt="" className="w-[14px] h-[13.5px]" />
                <p className="text-lg ml-4">5.0</p>
              </div>
            </div>
            <p className="text-md text-gray-500 px-4"> Satisfied Trainee</p>
          </div>
        );
      }
      )
      }
    </div>
  );
};

export default TraincerCard;
