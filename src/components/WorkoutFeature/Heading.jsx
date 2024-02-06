import React from "react";

const Heading = ({ head, name, icon, secondicon }) => {
  return (
    <div>
      <p> {head}</p>
      <div className="flex ">
        <img src={icon} alt="" />
        <p className="pl-3"> {name}</p>
        <button className="pl-8">
          {" "}
          <img src={secondicon} alt=""></img>
        </button>
      </div>
    </div>
  );
};

export default Heading;
