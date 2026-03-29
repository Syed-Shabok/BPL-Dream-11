import React, { use } from "react";
import PlayerCard from "../ui/PlayerCard";

const Players = ({ playerPromise }) => {
  const players = use(playerPromise);

  console.log(players);

  return (
    <div className="container mx-auto my-5">
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 mx-5">
        {players.map((player) => (
          <PlayerCard key={player.playerId} player={player} />
        ))}
      </div>
    </div>
  );
};

export default Players;
