import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { HiMiniUser, HiUser } from "react-icons/hi2";
import { IoFlagSharp } from "react-icons/io5";

const PlayerCard = ({ player }) => {
  const {
    playerName,
    playerCountry,
    playerType,
    rating,
    battingStyle,
    bowlingStyle,
    price,
    image,
  } = player;

  return (
    <div className="border-2  border-gray-200 flex flex-col gap-4 p-5 rounded-xl shadow-sm">
      {/* Image Container */}
      <div className="">
        <img
          src={image}
          className="h-64 w-full object-cover rounded-xl"
          alt={`Image of ${playerName}`}
        />
      </div>

      {/* Player Name */}
      <div className="flex gap-2 items-center ">
        <HiMiniUser size={23} />
        <h3 className="font-semibold text-xl">{playerName}</h3>
      </div>

      {/* Country & Type */}
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center opacity-60">
          <IoFlagSharp />
          {playerCountry}
        </div>
        <div className="badge badge-ghost p-4">{playerType}</div>
      </div>

      <div className="divider my-0"></div>

      <h4 className="font-bold">Rating: {rating}</h4>

      {/* Batting and Bowling Styles */}
      <div className="font-semibold flex items-center justify-between">
        <h4>{battingStyle}</h4>
        <h4 className="text-right">{bowlingStyle}</h4>
      </div>

      {/* Player Price and Choose Player Button */}
      <div className="flex items-center justify-between">
        <h4 className="font-semibold md:text-lg">Price: ${price}</h4>
        <button className="btn btn-outline">Choose Player</button>
      </div>
    </div>
  );
};

export default PlayerCard;
