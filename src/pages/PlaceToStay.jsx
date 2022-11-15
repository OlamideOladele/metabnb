import React from "react";
import One from "./../img/cards/1.svg";
import Two from "./../img/cards/2.svg";
import Three from "./../img/cards/3.svg";
import Four from "./../img/cards/4.svg";
import Five from "./../img/cards/5.svg";
import Six from "./../img/cards/6.svg";
import Seven from "./../img/cards/7.svg";
import Eight from "./../img/cards/8.svg";
import Nine from "./../img/cards/9.svg";
import Ten from "./../img/cards/10.svg";
import Eleven from "./../img/cards/11.svg";
import Twelve from "./../img/cards/12.svg";
import Thirteen from "./../img/cards/13.svg";
import Fourteen from "./../img/cards/14.svg";
import Fifteen from "./../img/cards/15.svg";
import Sixteen from "./../img/cards/16.svg";

import { FaStar } from "react-icons/fa";
import { VscSettings } from "react-icons/vsc"

const PlaceToStay = () => {
  const places = [
    One,
    Two,
    Three,
    Four,
    Five,
    Six,
    Seven,
    Eight,
    Nine,
    Ten,
    Eleven,
    Twelve,
    Thirteen,
    Fourteen,
    Fifteen,
    Sixteen,
  ];

  const subnavs = [
    "Resturant",
    "cottage",
    "castle",
    "fantastic city",
    "beach",
    "carbins",
    "off-grids",
    "farm",
  ];
  return (
    <div>
      <div>
        <div className="m-4 md:mx-20 md:my-10">
          <div className="flex p-4">
            <div className="grid grid-cols-8 grid-flow-rows gap-2 mr-8 w-auto md:w-[80%]">
              {subnavs.map((subnav) => (
                <h1 className="text-center md:text-center">{subnav}</h1>
              ))}
            </div>
            <div className="flex space-x-4 border border-black rounded-md w-auto md:w-[20%] ">
              <button className="hidden ml-4 md:block">Location</button>
             <span className="pt-1"><VscSettings /></span>  
            </div>
            
          </div>

          <div>
            <div className="my-4 grid gap-x-1 gap-y-1 grid-cols-2 md:grid-cols-4">
              {places.map((place) => (
                <div className="border rounded-xl p-3 m-2 text-[10px] md:m-4 md:text-[12px]">
                  <img src={place} alt="place" />
                  <div className="flex justify-between mt-2">
                    <span>Desert King</span>
                    <b>1MBT per night</b>
                  </div>
                  <div className="flex justify-between mt-2">
                    <span>2345km away</span>
                    <b>available for 2weeks stay</b>
                  </div>
                  <div className="flex my-2 text-fuchsia-800">
                    <FaStar className="mr-1" />
                    <FaStar className="mx-1" />
                    <FaStar className="mx-1" />
                    <FaStar className="mx-1" />
                    <FaStar className="mx-1" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceToStay;
