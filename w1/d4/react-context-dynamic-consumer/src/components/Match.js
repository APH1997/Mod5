import { useState, useContext } from "react";
import { HoroscopeContext } from "../context/HoroscopeContext";

const Match = () => {
  const { sign, match, setMatch } = useContext(HoroscopeContext);
  console.log("Match rendering");
  return (
    <>
      <button onClick={() => setMatch(!match)}>
        {/* inner content of element */}
        {match ? "Hide Match" : "Reveal Match!"}
      </button>
      {match && <div>{sign.match}</div>}
    </>
  );
};

export default Match;
