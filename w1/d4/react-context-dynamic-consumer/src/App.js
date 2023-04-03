import Navbar from "./components/Navbar";
import SeparatorOne from "./components/SeparatorOne";
import SideCard from "./components/SideCard";

function App() {
  console.log("App rendering");
  return (
    <>
      <Navbar />
      <SideCard />
      <SeparatorOne />
    </>
  );
}

export default App;
