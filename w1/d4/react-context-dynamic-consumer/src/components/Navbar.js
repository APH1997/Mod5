import { useContext } from "react";
import { HoroscopeContext } from "../context/HoroscopeContext";
import horoscopesObj from "../data/horoscopes";

const Navbar = () => {
  const { setCurrentSign, setMatch } = useContext(HoroscopeContext);
  const horoscopes = Object.keys(horoscopesObj);
  console.log("Navbar rendering");
  return (
    <nav>
      {horoscopes.map((sign) => (
        <span
          key={sign}
          onClick={() => {
            setCurrentSign(sign);
            setMatch(false);
          }}
        >
          {sign}
        </span>
      ))}
    </nav>
  );
};

export default Navbar;
