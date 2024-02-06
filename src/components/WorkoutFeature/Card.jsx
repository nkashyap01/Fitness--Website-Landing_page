import React from "react";

const Card = ({
  cardPic,
  title,
  starIcon,
  rating,
  cardText,
  firstIcon,
  activity,
  secondIcon,
  time,
  thirdIcon,
  followers,
}) => {
  return (
    <div className=" bg-[#F9FAFB] pb-2 shadow-lg rounded-lg">
    
      <img src={cardPic} alt= ""/>
      <div className="px-3">
      <div className="flex justify-between ">
        <h1 className="text-[rgb(255,121,23)] pb-"> {title}</h1>
        <div className="flex gap-2">
          <img src={starIcon} className="w-[15px] h-[14px] "alt="" />
          <h3>{rating}</h3>
        </div>
      </div>
      <h1 className="font-bold"> {cardText}</h1>
      <div className="flex justify-between items-center mt-5">
        <img src={firstIcon} className="w-4 h-4" alt="" />
        <p> {activity}</p>
        <img src={secondIcon} className="w-4 h-4" alt="" />
        <p> {time}</p>
        <img src={thirdIcon} className="w-4 h-4" alt="" />
        <p> {followers}</p>
      </div>
      <hr className="px-4 mt-5" />
      <div className="flex justify-between items-center mt-5">
        <img src={cardPic} className="rounded-[50%] h-[42px] w-[42px]" alt="" />
        <p className="relative -left-9"> Albert Hamrich</p>
        <p className="text-[#FF7917]"> $150.00</p>
      </div>
    </div>
    </div>
  );
};

export default Card;
