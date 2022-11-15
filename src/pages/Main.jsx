import React from "react";
import heroImage from "./../img/hero.svg";
import heroImage2 from "./../img/hero2.svg";
import banner1 from "./../img/banner1.svg";
import banner2 from "./../img/banner2.svg";
import banner3 from "./../img/banner1.svg";

import One from "./../img/cards/1.svg";
import Two from "./../img/cards/2.svg";
import Three from "./../img/cards/3.svg";
import Four from "./../img/cards/4.svg";
import Five from "./../img/cards/5.svg";
import Six from "./../img/cards/6.svg";
import Seven from "./../img/cards/7.svg";
import Eight from "./../img/cards/8.svg";

import { FaStar} from 'react-icons/fa'

const Main = () => {
  const places = [
    One,
    Two,
    Three,
    Four,
    Five,
    Six,
    Seven,
    Eight,
  ];

  return (
    <div>
      <div className="m-8 md:justify-between md:flex">
        <div className="w-full mb-10 md:mx-20 md:my-24 md:w-1/2">
          <h1 className="text-4xl md:mb-8 md:text-5xl">
            Rent a <b className="text-fuchsia-800">Place </b>away from{" "}
            <b className="text-fuchsia-800">Home </b>in the{" "}
            <b className="text-fuchsia-800">Metaverse</b>
          </h1>
          <p className="my-2 md:text-xl md:mb-4">
            we provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </p>
          <form class="flex">
            <input
              type="text"
              name="text"
              className="mt-2 px-3 py-2 w-2/3 bg-white border rounded-l-lg shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-fullsm:text-sm focus:ring-1"
              placeholder="Search for a location"
            />
            <button className="mt-2 px-3 py-2 w-1/3 rounded-r-lg bg-fuchsia-800 text-white hover:bg-fuchsia-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
              Search
            </button>
          </form>
        </div>

        <div className="w-full md:w-1/2">
          <img src={heroImage} alt="home" />
        </div>
      </div>

      <div className="flex bg-fuchsia-900 my-4 w-full h-12">
        <img src={banner1} alt="banner1" className="w-1/3 my-3 md:my-2" />
        <img src={banner2} alt="banner2" className="w-1/3 my-3 md:my-2" />
        <img src={banner3} alt="banner3" className="w-1/3 my-3 md:my-2" />
      </div>

      <div>
        <div className="m-4 md:mx-20 md:my-24">
          <h1 className="text-2xl text-center md:mb-10 md:text-4xl md:text-center">
            Inspiration for your next adventure
          </h1>
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
                    <FaStar className="mr-1"/>
                    <FaStar className="mx-1"/>
                    <FaStar className="mx-1"/>
                    <FaStar className="mx-1"/>
                    <FaStar className="mx-1"/>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-fuchsia-800 p-8 md:justify-between md:flex">
        <div className="w-full mb-10 md:mx-20 md:my-24 md:w-1/2">
          <h1 className="text-4xl text-white md:mb-8 md:text-5xl">
            <b>MetaBNB</b> NFTs
          </h1>
          <p className="my-2 text-white md:text-xl md:mb-4">
          Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.
          </p>
            <button className="mt-2 px-3 py-2 w-1/3 rounded-lg bg-white text-black hover:bg-fuchsia-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
              Learn More
            </button>

        </div>

        <div className="w-full md:w-1/2 p-4 md:mr-12">
          <img src={heroImage2} alt="home" />
        </div>
      </div>

      
    </div>
  );
};

export default Main;
