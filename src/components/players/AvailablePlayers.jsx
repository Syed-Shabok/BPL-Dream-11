import React from "react";
import PlayerCard from "../ui/PlayerCard";

const AvailablePlayers = ({
  players,
  coins,
  setCoins,
  selectedPlayers,
  setSelectedPlayers,
}) => {
  return (
    <>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 mx-5">
        {players.map((player) => (
          <PlayerCard
            key={player.playerId}
            player={player}
            coins={coins}
            setCoins={setCoins}
            selectedPlayers={selectedPlayers}
            setSelectedPlayers={setSelectedPlayers}
          />
        ))}
      </div>
    </>
  );
};

export default AvailablePlayers;
