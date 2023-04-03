import { Link } from "react-router-dom";

function FruitsIndex(props) {

  return (<div className="fruits-index">
    <h2>Fruits Index</h2>
    <ul>

    {props.fruits.map(fruit => {
      return (
        <li key={fruit.id}>
        <Link to={`/fruits/${fruit.id}`}>{fruit.name}</Link>
        </li>
      )
    })}

    </ul>
  </div>)
}

export default FruitsIndex;
