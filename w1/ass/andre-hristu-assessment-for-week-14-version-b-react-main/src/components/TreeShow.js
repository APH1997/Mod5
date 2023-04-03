import { useParams } from "react-router-dom";

function TreeShow({trees}) {
const {treeId} = useParams();
const currTree = trees.find(tree => tree.id === treeId);
  return (
    <div className="tree-show">
      <h2>{currTree.name}</h2>
      <h3>Type: {currTree.type}</h3>
      <h3>Average Height: {currTree.avgHeight} ft</h3>
    </div>
  );
}

export default TreeShow;
