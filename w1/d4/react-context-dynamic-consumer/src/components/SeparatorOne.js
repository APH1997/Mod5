import SeparatorTwo from "./SeparatorTwo";

const SeparatorOne = () => {
  console.log("SeparatorOne rendering");
  return (
    <div className="sep-1">
      <SeparatorTwo />
    </div>
  );
};

export default SeparatorOne;
