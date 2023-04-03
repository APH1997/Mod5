import {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';

const COLORS = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "purple"
];



function FruitForm({ fruits }) {
  const history = useHistory();
  const[name, setName] = useState('');
  const[sweetness, setSweetness] = useState(1);
  const[color, setColor] = useState(COLORS[0]);
  const[seeds, setSeeds] = useState('yes')
  const[errors, setErrors] = useState('');

  //ERROR HANDLING USE EFFECT
  useEffect(() => {
    const errObj = {}
    //name < 3
    if (name.length < 3) errObj.name = "Name must be 3 or more characters."
    else
    //name > 20
    if (name.length > 20) errObj.name = "Name must be 20 characters or less."
    else
    //name !unique
    for (let fruit of fruits){
      if (fruit.name.toLowerCase() === name.toLowerCase()){
        errObj.name = "Name already exists."
      }
    }

    //sweetness !between 1 and 10
    if (sweetness < 1 || sweetness > 10) errObj.sweetness = "Sweetness must be between 1 and 10."
    else {delete errObj.sweetness}

    //set error state
    setErrors(errObj)

  }, [name, sweetness])

  function handleSubmit(e){
    e.preventDefault();
    const newFruit = {
      name,
      sweetness,
      color,
      seeds
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
          onChange={(e) => setName(e.target.value)}
          value={name}
          />
      </label>
      {errors.name && <p className='errors'>{errors.name}</p>}
      <label>
        Select a Color
        <select onChange={(e) => setColor(COLORS[(COLORS.indexOf(e.target.value))])}
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
          onChange={(e) => setSweetness(e.target.value)}
          value={sweetness}
        />
      </label>
      {errors.sweetness && <p className='errors'>{errors.sweetness}</p>}
      <label>
        <input
          type="radio"
          value="no"
          name="seeds"
          onChange={(e) => setSeeds(e.target.value)}

        />
        No Seeds

      </label>
      <label>
        <input
          type="radio"
          value="yes"
          name="seeds"
          onChange={(e) => setSeeds(e.target.value)}
          defaultChecked
        />
        Seeds
      </label>
      <button
        type="submit"
        disabled={Object.keys(errors).length ? true : false}
      >
        Submit Fruit
      </button>
    </form>
  );
}

export default FruitForm;
