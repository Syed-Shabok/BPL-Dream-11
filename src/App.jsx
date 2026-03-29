import { Suspense } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Players from "./components/players/Players";

const fetchPlayers = async () => {
  const res = await fetch("../public/playerData.json");

  return res.json();
};

function App() {
  const playerPromise = fetchPlayers();

  return (
    <>
      <Navbar />
      <Suspense
        fallback={
          <div className="w-full flex justify-center min-h-[50vh]">
            <span className="loading loading-bars loading-xl"></span>
          </div>
        }
      >
        <Players playerPromise={playerPromise} />
      </Suspense>
    </>
  );
}

export default App;
