import { useContext } from "react";
import { TreeTypeContext } from "../context/TreeTypeContext";

const ToggleTreeType = () => {
  const {treeTypeId, setTreeTypeId} = useContext(TreeTypeContext);

  return (
    <div className="toggle-tree-type">
      <h2>Deciduous or Evergreen?</h2>
      <label>
        <input
          type="radio"
          value="1"
          name="treeTypeId"
          checked={treeTypeId === "1"}
          onChange={(e) => setTreeTypeId(e.target.value)}
        />
        Deciduous
      </label>
      <label>
        <input
          type="radio"
          value="2"
          name="treeTypeId"
          checked={treeTypeId === "2"}
          onChange={(e) => setTreeTypeId(e.target.value)}
        />
        Evergreen
      </label>
    </div>
  );
}

export default ToggleTreeType;
