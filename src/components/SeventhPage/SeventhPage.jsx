import React from "react";
import firstpic from "../../Assests/testimonials-pic-1.png";
import secondpic from "../../Assests/testimonials-pic-2.png";
import thirdpic from "../../Assests/testimonials-pic-3.png";
import fourthpic from "../../Assests/testimonials-pic-4.png";
import fifthpic from "../../Assests/testimonials-pic-5.png";
import starIcon from "../../Assests/staricon.png";

const SeventhPage = () => {
  return (
    <div>
      <div className="p-8 flex flex-col justify-center items-center">
        <div className="text-center">
          <h1 className=" font-semibold">
            {" "}
            <span className="text-[#FF7917] font-semibold text-xl"> - </span>
            Testimonials
          </h1>
          <h1 className="text-2xl font-semibold">
            Our Featured <span className="text-[#FF7917] "> Testimonials </span>
          </h1>
        </div>
        <div className=" flex pt-4 gap-20">
          <img className=" w-[122px] h-[122px]" src={firstpic} alt="" />
          <img className=" w-[122px] h-[122px]" src={secondpic} alt="" />
          <img src={thirdpic} alt="" />
          <img className=" w-[122px] h-[122px]" src={fourthpic} alt="" />
          <img className=" w-[122px] h-[122px]" src={fifthpic} alt="" />
        </div>
        <h1 className="text-xl font-bold pt-4"> Albert Laangster</h1>
        <p className="text-[#6C6C6C] mt-1">Satisfied Trainee</p>
        <div className="flex gap-2 pt-6">
          <img src={starIcon} />
          <img src={starIcon} />
          <img src={starIcon} />
          <img src={starIcon} />
          <img src={starIcon} />
        </div>
        <div className="pt-10">
          <p className="text-[#52525B] text-xl">
            {" "}
            With Landing folio, the design team can now build design which
            identifies <br />
            employees’ career aspirations and goals and from which we approach{" "}
            <br />
            managers and check to see what is happening.
          </p>
        </div>
      </div>

      <div className="px-10 pt-6 flex justify-between">
        <div>
          <h3> Expert Trainer</h3>
          <h1 className="text-[#FF7917] font-semibold">
            Empower Your Fitness:
          </h1>
          <h1 className="font-semibold"> Your Personal Trainer</h1>
        </div>
        <div>
          <button className=" mt-[20px] bg-[#FF7917] w-[147px] h-[38px] rounded-[30px] text-white py-[6px] ">
            {" "}
            View All Agents
          </button>
        </div>
      </div>
    </div>
  );
};

export default SeventhPage;
