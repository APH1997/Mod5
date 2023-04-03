import trees from "./mockData/trees.json";
import TreesIndex from "./components/TreesIndex";
import TreeForm from "./components/TreeForm";
import FilteredTreesIndex from "./components/FilteredTreesIndex";
import ToggleTreeType from "./components/ToggleTreeType";
import TreeShow from "./components/TreeShow";
import Navigation from "./components/Navigation";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";

function App() {
  return (
    <>
      <h1>Welcome to the Trees App</h1>
      <Navigation />
      <Switch>

        <Route exact path="/trees">
          <TreesIndex trees={trees}/>
        </Route>

        <Route path="/trees/new">
          <TreeForm trees={trees}/>
        </Route>

        <Route path="/filtered-trees">
          <FilteredTreesIndex trees={trees}/>
        </Route>

        <Route path="/toggle-tree-type">
          <ToggleTreeType />
        </Route>

        <Route path="/trees/:treeId">
          <TreeShow trees={trees}/>
        </Route>

        <Route>
          Page Not Found
        </Route>

      </Switch>
    </>
  );
}

export default App;
