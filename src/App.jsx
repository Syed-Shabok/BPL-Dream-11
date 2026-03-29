import { Suspense, useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Players from "./components/players/Players";

const fetchPlayers = async () => {
  const res = await fetch("../public/playerData.json");

  return res.json();
};

function App() {
  const playerPromise = fetchPlayers();
  const [coins, setCoins] = useState(3000);

  // const manageCoins = (playerPrice, isBuying) => {
  //   let newCoins = 0;
  //   if (isBuying) {
  //     newCoins = coins - playerPrice;
  //   } else {
  //     newCoins = coins + playerPrice;
  //   }

  //   if (newCoins < 0) {
  //     alert("Not enough coins!");
  //     return;
  //   }
  //   setCoins(newCoins);
  // };

  return (
    <>
      <Navbar coins={coins} />
      <Suspense
        fallback={
          <div className="w-full flex justify-center min-h-[50vh]">
            <span className="loading loading-bars loading-xl"></span>
          </div>
        }
      >
        <Players
          playerPromise={playerPromise}
          coins={coins}
          setCoins={setCoins}
        />
      </Suspense>
    </>
  );
}

export default App;
