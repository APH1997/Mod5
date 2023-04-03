import { createContext, useState } from "react";
import App from "../App";
import horoscopesObj from "../data/horoscopes";

export const HoroscopeContext = createContext();

export const HoroscopeProvider = (props) => {
  const [currentSign, setCurrentSign] = useState("Gemini");
  const [match, setMatch] = useState(false);
  const sign = horoscopesObj[currentSign];
  console.log("HoroscopeProvider rendering");

  return (
    <HoroscopeContext.Provider
      value={{
        sign,
        setCurrentSign,
        match,
        setMatch
      }}
    >
      {/* TODO: use the children prop for efficient rerenders */}
      {props.children}

      {/* <App /> */}
    </HoroscopeContext.Provider>
  );
};

export default HoroscopeProvider;
