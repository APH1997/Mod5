import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <NavLink exact to="/trees">All Trees</NavLink>
      <NavLink to="/trees/new">Add a Tree</NavLink>
      <NavLink to="/filtered-trees">Filtered Trees by Type</NavLink>
      <NavLink to="/toggle-tree-type">Set Tree Type</NavLink>
    </nav>
  );
}

export default Navigation;
