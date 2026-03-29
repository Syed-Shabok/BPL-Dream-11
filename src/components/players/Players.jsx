import React, { use, useState } from "react";
import AvailablePlayers from "./AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers";

const Players = ({ playerPromise }) => {
  const players = use(playerPromise);
  //   console.log(players);

  const [selectedTab, setSelectedTab] = useState(false);

  return (
    <div className="container mx-auto my-5">
      {/* Toggle Buttons */}
      <div className="flex items-center justify-between container mx-auto py-8 px-5">
        {!selectedTab ? (
          <h2 className="text-xl md:text-2xl font-bold">Available Players</h2>
        ) : (
          <h2 className="text-xl md:text-2xl font-bold">
            Selected Players ({`2/${players.length}`})
          </h2>
        )}

        <div className="flex flex-col md:flex-row gap-2 md:gap-0">
          <button
            onClick={() => setSelectedTab(false)}
            className={`btn btn-outline border-gray-300 md:border-r-0 rounded-lg md:rounded-r-none ${!selectedTab && "bg-[#E7FE29]"}  w-36 md:w-fit text-sm md:text-base p-5`}
          >
            Available
          </button>
          <button
            onClick={() => setSelectedTab(true)}
            className={`btn btn-outline border-gray-300 md:border-l-0 rounded-lg md:rounded-l-none ${selectedTab && "bg-[#E7FE29]"} w-36 md:w-fit md:text-base text-sm p-5`}
          >
            Selected (0)
          </button>
        </div>
      </div>

      {/* Players will render below  */}
      {!selectedTab ? (
        <AvailablePlayers players={players} />
      ) : (
        <SelectedPlayers />
      )}
    </div>
  );
};

export default Players;
