import React from "react";
import iosicon from "../Assests/ios-icon.png";

const secondpage = () => {
  return (
    <div className="flex w-[95wh]  justify-between  h-[250px] p-6">
      <div className="h-[248px] w-[330px] ">
        <div className="relative   flex flex-col gap-[29px]">
          <h4 className="text-xl">
            {" "}
            Download Our
            <br />
            <span className="text-xl">
              Fitness App <span className="text-[#FF7917]"> Today!</span>{" "}
            </span>
          </h4>

          <p className="text-xs -mt-4">
            {" "}
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took
            <br />
            <br />
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took
          </p>
          <div className="w-[430px] h-[40px]  flex  -mt-2">
            <div className="w-4/12 border-r-[1.5px] border-black pr-2">
              <h1 className="text-[#FF7917] font-bold"> 5 Million+</h1>
              <p className="text-xs"> World Wide Active Users</p>
            </div>

            <div className="w-4/12 border-r-[1.5px] border-black flex justify-end pr-4 ">
              <div>
                <h1 className="text-[#FF7917] font-bold"> 1250+</h1>
                <p className="text-xs"> Trainer</p>
              </div>
            </div>

            <div className="w-4/12 flex justify-end pr-2">
              <div>
                <h1 className=" text-[#FF7917] font-bold"> 750+</h1>
                <p className="text-xs"> Workout</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-[390px] h-[250px] justify-between">
        <div className="w-[145px] flex flex-col gap-[57px] justify-center items-center">
          <p>
            {" "}
            <span> For IOS </span>
            <br /> IOS 15.6+
          </p>

          <button className=" bg-[#FF7917] py-[6px] w-[145px] h-[38px] rounded-[30px] text-white">
            {" "}
            Download App
          </button>
          <img src={iosicon} className="w-[55px] h-[55px]" />
        </div>
        <div className="w-[145px] flex flex-col gap-[57px] justify-center items-center">
          <p>
            {" "}
            <span> For IOS </span>
            <br /> IOS 15.6+
          </p>

          <button className=" bg-[#FF7917] w-[145px] h-[38px] rounded-[30px] text-white py-[6px]">
            {" "}
            Download App
          </button>
          <img src={iosicon} className="w-[55px] h-[55px]" />
        </div>
      </div>
    </div>
  );
};

export default secondpage;
