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
    <div className="px-2">
      <img src={cardPic} />
      <div className="flex justify-between ">
        <h1 className="text-[rgb(255,121,23)] pb-"> {title}</h1>
        <div className="flex gap-2">
          <img src={starIcon} className="w-[15px] h-[14px]" />
          <h3>{rating}</h3>
        </div>
      </div>
      <h1 className="font-bold"> {cardText}</h1>
      <div className="flex    justify-between items-center mt-5">
        <img src={firstIcon} className="w-4 h-4" />
        <p> {activity}</p>
        <img src={secondIcon} className="w-4 h-4" />
        <p> {time}</p>
        <img src={thirdIcon} className="w-4 h-4" />
        <p> {followers}</p>
      </div>
      <hr className="px-4" />
      <div className="flex justify-between items-center">
        <img src={cardPic} className="rounded-[50%] h-[42px] w-[42px]" />
        <p className="relative -left-9"> Albert Hamrich</p>
        <p> $150.00</p>
      </div>
    </div>
  );
};

export default Card;
