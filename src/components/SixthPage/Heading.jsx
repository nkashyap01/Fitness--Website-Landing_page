import React from "react";

const Heading = ({ head, name, icon, secondicon }) => {
  return (
    <div>
      <p> {head}</p>
      <div className="flex ">
        <img src={icon} />
        <p className="pl-3"> {name}</p>
        <button className="pl-8">
          {" "}
          <img src={secondicon}></img>
        </button>
      </div>
    </div>
  );
};

export default Heading;
