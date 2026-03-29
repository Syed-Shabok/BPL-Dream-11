import React from "react";
import PlayerCard from "../ui/PlayerCard";

const AvailablePlayers = ({ players }) => {
  return (
    <>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 mx-5">
        {players.map((player) => (
          <PlayerCard key={player.playerId} player={player} />
        ))}
      </div>
    </>
  );
};

export default AvailablePlayers;
