import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";

const SelectedPlayerCard = ({
  player,
  selectedPlayers,
  setSelectedPlayers,
  coins,
  setCoins,
}) => {
  //   console.log(player);

  const { playerName, playerType, price, image } = player;

  const handleDeletePlayer = () => {
    const newPlayerList = selectedPlayers.filter((p) => p !== player);
    setSelectedPlayers(newPlayerList);

    const newCoins = coins + price;
    setCoins(newCoins);
    // alert(`${playerName} has been removed.`);
  };

  return (
    <div className="p-5 border rounded-xl border-gray-300 shadow-sm flex items-center justify-between">
      <div className="flex items-center gap-6">
        <div className="">
          <img
            src={image}
            className="h-21 w-21 object-cover rounded-xl"
            alt={`Image of ${playerName}`}
          />
        </div>

        <div>
          <h3 className="font-semibold text-2xl">{playerName}</h3>
          <p className="text-lg">{playerType}</p>
        </div>
      </div>
      <div>
        <button
          onClick={handleDeletePlayer}
          className="btn btn-ghost w-fit text-red-400"
        >
          <FaRegTrashAlt size={23} />
        </button>
      </div>
    </div>
  );
};

export default SelectedPlayerCard;
