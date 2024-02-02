import React from "react";

import acc from "../Images/ExclusiveImages/accesories.png";
import console from "../Images/ExclusiveImages/CONSOLES.png";
import videogames from "../Images/ExclusiveImages/VIDEOGAMES.png";
import merchandise from "../Images/ExclusiveImages/MERCHANDISE.png";

const ExclusiveDeals = () => {
  return (
    <div className=" w-full flex flex-col justify-center items-center mt-5 ">
      <p className="   text-4xl font-bold my-5 text-orange-500 ">
        EXCLUSIVE DEALS{" "}
      </p>
      <div className=" flex gap-8 p-2">
        <img src={acc} alt="Image 1" className=" max-h-full rounded-xl" />
        <img src={console} alt="Image 1" className=" max-h-full rounded-xl" />
        <img
          src={videogames}
          alt="Image 1"
          className=" max-h-full rounded-xl"
        />
        <img
          src={merchandise}
          alt="Image 1"
          className=" max-h-full rounded-xl"
        />
      </div>
    </div>
  );
};

export default ExclusiveDeals;
