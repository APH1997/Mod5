import TreesIndex from './TreesIndex.js';
import { useContext } from 'react';
import { TreeTypeContext } from '../context/TreeTypeContext.js';


const FilteredTreesIndex = ({trees}) => {
  const {treeType} = useContext(TreeTypeContext);
  const filtered = trees.filter(tree => tree.type === treeType)

  return (
    <>
    <h2>{treeType}</h2>
    <TreesIndex trees={filtered}/>
    </>
  );
}

export default FilteredTreesIndex;
