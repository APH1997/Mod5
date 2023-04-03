import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const TYPES = [
  "Deciduous",
  "Evergreen"
];

function TreeForm() {
  const [name, setName] = useState('')
  const [type, setType] = useState(TYPES[0])
  const [avgHeight, setAvgHeight] = useState(1)
  const [errors, setErrors] = useState({})
  const history = useHistory()

  useEffect(() => {
    const errObj = {};
    if (!name.length) errObj.name = "Name field is required"
    if (name.length > 50) errObj.name = "Name must be no greater than 50 characters."
    if (avgHeight < 1 || avgHeight > 500) errObj.avgHeight = "Average Height must be between 1 and 500 meters."

    setErrors(errObj);

  }, [name, avgHeight])

  function handleSubmit(e){
    e.preventDefault();

    const newTree = {
      name,
      type,
      avgHeight
    }

    console.log(newTree)

    history.push('/trees')

  }

  return (
    <form
      className="tree-form"
      onSubmit={handleSubmit}
    >
      <h2>Add a Tree</h2>
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
        Select a Type
        <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        >
          {TYPES.map(type => (
            <option
              key={type}
            >
              {type}
            </option>
          ))}
        </select>
      </label>
      <label>
        Average Height (in meters)
        <input
          type="number"
          name="avgHeight"
          value={avgHeight}
          onChange={(e) => setAvgHeight(e.target.value)}
        />
      </label>
      {errors.avgHeight && <p className="errors">{errors.avgHeight}</p>}
      <button
        type="submit"
        disabled={Object.values(errors).length > 0}
      >
        Add Tree
      </button>
    </form>
  );
}

export default TreeForm;
