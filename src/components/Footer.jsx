import React from "react";
import logo from "../Assests/logo-icon.png";
import twitterlogo from "../Assests/logo-twitter.png";
import fblogo from "../Assests/logo-fb.png";
import instalogo from "../Assests/logo-insta.png";
import gitlogo from "../Assests/logo-github.png";
import smsicon from "../Assests/sms-icon.png";
// import "../styles/globals.css";
import store from "../Assests/playstore.png";
import app from "../Assests/app.png";
import appstore from "../Assests/appstore.png";

const Footer = () => {
  return (
    <div className="relative">
      <div className="bg-[#2B2B2B]  h-[440px]  mt-[150px]">
        <div className="relative  top-[180px] flex justify-around ">
          <div className="flex flex-col gap-9">
            <div className="flex">
              {" "}
              <img src={logo} className="w-[55px]" />
              <h1 className="text-[#5D2C02] font-bold relative left-4 text-lg ">
                Fitness <span className="text-black">Hub</span>
              </h1>
            </div>
            <div>
              <p className="text-white">
                {" "}
                Clarity gives you the blocks and <br />
                components you need to create <br />a truly professional
                website.
              </p>
            </div>
            <div className="flex gap-[10px]">
              <img src={twitterlogo} alt="" />
              <img src={fblogo} alt="" />
              <img src={instalogo} alt="" />
              <img src={gitlogo} alt="" />
            </div>
          </div>
          <div className="">
            <ul className="flex flex-col gap-5">
              <li className="text-[#FF7917] font-bold text-white">
                {" "}
                <a href="#">
                  <span className="text-[#FF7917]"> COMPANY</span>
                </a>
              </li>
              <li>
                {" "}
                <a href="#"> Home</a>
              </li>
              <li>
                {" "}
                <a href="#"> Features</a>
              </li>
              <li>
                {" "}
                <a href="#"> Services</a>
              </li>
              <li>
                {" "}
                <a href="#"> Contact US</a>
              </li>
              <li>
                {" "}
                <a href="#"> About US</a>
              </li>
            </ul>
          </div>
          <div className="">
            <ul className="flex flex-col gap-5">
              <li className=" font-bold text-white">
                {" "}
                <a href="#">
                  {" "}
                  <span className="text-[#FF7917]">HELP </span>
                </a>
              </li>
              <li>
                {" "}
                <a href="#"> CustomerSupport</a>
              </li>
              <li>
                {" "}
                <a href="#"> DeliveryDetails</a>
              </li>
              <li>
                {" "}
                <a href="#"> Terms&Conditions</a>
              </li>
              <li>
                {" "}
                <a href="#"> PrivacyPolicy</a>
              </li>
            </ul>
          </div>
          <div>
            <input
              type="email"
              className=" pl-10 bg-[#000000] w-[345px] h-[48px] text-white rounded-[12px]   "
              placeholder="Enter your email "
            />
            <div className="relative -top-10 left-4 flex justify-between items-center">
              <img src={smsicon} />
              <button className="h-[36px] w-[105px] bg-[#FF7917] text-white rounded-[8px] relative right-5 -top-[3px]">
                {" "}
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[1025px] h-[304px] bg-[#FF7917] rounded-[30px] absolute -top-[135px] left-[128px]">
        <div className=" m-8  flex flex-col justify-end items-center gap-[25px]">
          <div className="text-center flex flex-col gap-[10px]">
            <p className="  text-white text-xs ">
              {" "}
              Unlock your Fitness Potential: Your Workout Hub
            </p>
            <h1 className="text-xl font-semibold relative -top-2">
              Download the App Now
            </h1>
            <p className="text-xs text-white  ">
              {" "}
              Copy Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum <br />
              has been the industry's standard
            </p>
          </div>
          <div className="flex gap-3">
            <button className="flex bg-[#2B2B2B] h-[61px] w-[202px] items-center justify-center rounded-lg">
              <img src={store} alt />
              <div className="ml-2">
                <p className="text-xs text-white "> GET IT ON</p>
                <p className="text-2xl text-white"> Google Play</p>
              </div>
            </button>
            <button className="flex bg-[#2B2B2B] h-[61px] w-[202px] items-center justify-center rounded-lg">
              <div>
                <img src={app} alt className="relative left-3" />
                <img src={appstore} alt />
              </div>
              <div className="ml-2">
                <p className="text-xs text-white "> DOWNLOAD ON THE</p>
                <p className="text-2xl text-white"> App Store</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
