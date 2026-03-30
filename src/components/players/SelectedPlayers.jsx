import React from "react";
import SelectedPlayerCard from "../ui/SelectedPlayerCard";

const SelectedPlayers = ({
  selectedPlayers,
  setSelectedPlayers,
  coins,
  setCoins,
}) => {
  // console.log("Selected Players: ", selectedPlayers);
  return (
    <div className="container mx-auto px-5 my-5">
      <div className="flex flex-col gap-5">
        {selectedPlayers.map((player) => (
          <SelectedPlayerCard
            key={player.playerId}
            player={player}
            selectedPlayers={selectedPlayers}
            setSelectedPlayers={setSelectedPlayers}
            coins={coins}
            setCoins={setCoins}
          />
        ))}
      </div>
    </div>
  );
};

export default SelectedPlayers;
