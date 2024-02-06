import React from "react";
import firstpic from "../../Assests/yoga-first-pic.png";
import secondpic from "../../Assests/yoga-second-pic.png";
import thirdpic from "../../Assests/yoga-third-pic.png";
import fourthpic from "../../Assests/yoga-fourth-pic.png";
import fifthpic from "../../Assests/yoga-fifth-pic.png";
import sixthpic from "../../Assests/yoga-sixth-pic.png";
import firstIcon from "../../Assests/yoga-first-icon.png";
import secondIcon from "../../Assests/yoga-second-icon.png";
import thirdIcon from "../../Assests/yoga-third-icon.png";
import starIcon from "../../Assests/staricon.png";
import Card from "./Card";

const CardIteration = () => {
  const cardItems = [
    {
      cardPic: firstpic,
      title: "Yoga | Online",
      starIcon: starIcon,
      rating: "4.9",
      cardText: "MindfulMovement",
      firstIcon: firstIcon,
      activity: "12 Activity",
      secondIcon: secondIcon,
      time: "ihr 30min",
      thirdIcon: thirdIcon,
      followers: "15000",
    },
    {
      cardPic: secondpic,
      title: "Yoga | Online",
      starIcon: starIcon,
      rating: "4.9",
      cardText: "MindfulMovement",
      firstIcon: firstIcon,
      activity: "12 Activity",
      secondIcon: secondIcon,
      time: "ihr 30min",
      thirdIcon: thirdIcon,
      followers: "15000",
    },
    {
      cardPic: thirdpic,
      title: "Yoga | Online",
      starIcon: starIcon,
      rating: "4.9",
      cardText: "MindfulMovement",
      firstIcon: firstIcon,
      activity: "12 Activity",
      secondIcon: secondIcon,
      time: "ihr 30min",
      thirdIcon: thirdIcon,
      followers: "15000",
    },
    {
      cardPic: fourthpic,
      title: "Yoga | Online",
      starIcon: starIcon,
      rating: "4.9",
      cardText: "MindfulMovement",
      firstIcon: firstIcon,
      activity: "12 Activity",
      secondIcon: secondIcon,
      time: "ihr 30min",
      thirdIcon: thirdIcon,
      followers: "15000",
    },
    {
      cardPic: fifthpic,
      title: "Yoga | Online",
      starIcon: starIcon,
      rating: "4.9",
      cardText: "MindfulMovement",
      firstIcon: firstIcon,
      activity: "12 Activity",
      secondIcon: secondIcon,
      time: "ihr 30min",
      thirdIcon: thirdIcon,
      followers: "15000",
    },
    {
      cardPic: sixthpic,
      title: "Yoga | Online",
      starIcon: starIcon,
      rating: "4.9",
      cardText: "MindfulMovement",
      firstIcon: firstIcon,
      activity: "12 Activity",
      secondIcon: secondIcon,
      time: "ihr 30min",
      thirdIcon: thirdIcon,
      followers: "15000",
    },
  ];

  return (
    <div className="flex flex-wrap  p-8 border-2 border-black justify-between w-[95vw]">
      {cardItems.map(
        (
          {
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
          },
          index
        ) => {
          return (
            <Card
              cardPic={cardPic}
              title={title}
              starIcon={starIcon}
              rating={rating}
              cardText={cardText}
              firstIcon={firstIcon}
              activity={activity}
              secondIcon={secondIcon}
              thirdIcon={thirdIcon}
              followers={followers}
            />
          );
        }
      )}
    </div>
  );
};

export default CardIteration;
