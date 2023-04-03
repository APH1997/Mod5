import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { FavFruitContext } from "../context/FavFruitContext";

const FavoriteFruit = ({fruits}) => {

  const {favFruitId} = useContext(FavFruitContext);

  return (
    <div className="fav-fruit">
      <h2>Favorite Fruit</h2>
      <NavLink to={`/fruits/${favFruitId}`}>{fruits.find(fruit => favFruitId === fruit.id).name}</NavLink>
    </div>
  );
}

export default FavoriteFruit;
