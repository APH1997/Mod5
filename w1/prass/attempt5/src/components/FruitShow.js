import { useParams } from "react-router-dom";

function FruitShow({fruits}) {

  const {fruitId} = useParams();
  const currFruit = fruits.find(fruit => fruit.id === fruitId);

  return (
    <div className="fruit-show">
      <h2>{currFruit.name}</h2>
      <h3>Color: {currFruit.color}</h3>
      <h3>Sweetness: {currFruit.sweetness}</h3>
      <h3>Seeds: {currFruit.seeds}</h3>
    </div>
  );
}

export default FruitShow;
