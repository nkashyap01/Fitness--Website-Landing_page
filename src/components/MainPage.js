import React from "react";
import mainImage from "./Assests/Hero-image.png";
import store from "./Assests/playstore.png";
import app from "./Assests/app.png";
import appstore from "./Assests/appstore.png";

const MainPage = () => {
  return (
    <div className="relative h-[641px] mt-8">
      <div className="background-image h-[641px]"></div>
      <div className="absolute top-0 w-screen flex ">
        <div className="w-6/12 ">
          <div className="relative top-[107px] left-[40px] w-[423px]">
            <div className="gap-[36px] flex flex-col ">
              <h3 className="font-bold"> The Best Fitness & WorkOut App</h3>
              <h3 className="text-3xl font-bold">
                {" "}
                Your All-in-One
                <h3 className="text-[#FF7917]"> Fitness App</h3>
              </h3>

              <p>
                {" "}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries.
              </p>
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
        <div className="w-6/12">
          <img src={mainImage} alt className="h-[631px] w-[580px]" />
        </div>
      </div>
    </div>
  );
};

export default MainPage;

{
}
