import fruits from "./mockData/fruits.json";
import FruitsIndex from "./components/FruitsIndex";
import FruitForm from "./components/FruitForm";
import FavoriteFruit from "./components/FavoriteFruit";
import FavFruitProvider from "./context/FavFruitContext";
import SetFavoriteFruit from "./components/SetFavoriteFruit";
import FruitShow from "./components/FruitShow";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <h1>Welcome to Fruits App</h1>
      <Navigation />
      <Switch>
        <Route exact path='/'>
          <FruitsIndex fruits={fruits} />
        </Route>
        <Route path='/fruits/new'>
          <FruitForm fruits={fruits} />
        </Route>
        <Route path='/fruits/:fruitId'>
          <FruitShow fruits={fruits}/>
        </Route>
        <FavFruitProvider>
          <Route path='/fav-fruit'>
            <FavoriteFruit fruits={fruits} />
          </Route>
          <Route path='/set-fav-fruit'>
            <SetFavoriteFruit fruits={fruits} />
          </Route>
        </FavFruitProvider>

        <Route>
          <h1>Page Not Found</h1>
        </Route>
      </Switch>
    </>
  );
}

export default App;
