import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const COLORS = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "purple"
];

function FruitForm({ fruits }) {
  const history = useHistory()
  const [name, setName] = useState('');
  const [sweetness, setSweetness] = useState(1);
  const [seeds, setSeeds] = useState('yes');
  const [color, setColor] = useState(COLORS[0]);
  const [errors, setErrors] = useState({})

  useEffect(() => {
    const errObj = {};

    if (name.length < 3) errObj.name = "Name must be 3 or more characters.";
    if (name.length > 20) errObj.name = "Name must be 20 characters or less.";
    if (fruits.find(fruit => fruit.name.toLowerCase() === name.toLowerCase())) errObj.name = "Name already exists.";
    if (sweetness < 1 || sweetness > 10) errObj.sweetness = "Sweetness must be between 1 and 10.";

    setErrors(errObj);

  }, [name, sweetness])

  function handleSubmit(e){
    e.preventDefault();

    const newFruit = {
      name,
      sweetness,
      seeds,
      color
    }

    console.log(newFruit);

    history.push('/')
  }


  return (
    <form
      className="fruit-form"
      onSubmit={handleSubmit}
    >
      <h2>Enter a Fruit</h2>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      {errors.name && <p className="errors">{errors.name}</p>}
      <label>
        Select a Color
        <select
        value={color}
        onChange={(e) => setColor(e.target.value)}
        >
          {COLORS.map(color => (
            <option
              key={color}
              value={color}
            >
              {color}
            </option>
          ))}
        </select>
      </label>
      <label>
        Sweetness
        <input
          type="number"
          name="sweetness"
          value={sweetness}
          onChange={(e) => setSweetness(e.target.value)}
        />
      </label>
      {errors.sweetness && <p className="errors">{errors.sweetness}</p>}
      <label>
        <input
          type="radio"
          value="no"
          name="seeds"
          checked={seeds === "no"}
          onChange={(e) => setSeeds(e.target.value)}
        />
        No Seeds
      </label>
      <label>
        <input
          type="radio"
          value="yes"
          name="seeds"
          checked={seeds === "yes"}
          onChange={(e) => setSeeds(e.target.value)}
        />
        Seeds
      </label>
      <button
        type="submit"
        disabled={Object.values(errors).length > 0}
      >
        Submit Fruit
      </button>
    </form>
  );
}

export default FruitForm;
