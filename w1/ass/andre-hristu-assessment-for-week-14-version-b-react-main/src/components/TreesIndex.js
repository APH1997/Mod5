import { Link } from "react-router-dom";

function TreesIndex({trees}) {
  return (
    <div className="trees-index">
      <h2>Trees Index</h2>
      <ul>
        {trees.map(tree =>
          <li key={tree.id}>
            <Link to={`/trees/${tree.id}`}>{tree.name}</Link>
          </li>
        )}
      </ul>
    </div>
  );
}

export default TreesIndex;
