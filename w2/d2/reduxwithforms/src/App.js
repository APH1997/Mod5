import ArticleList from "./components/ArticleList";
import ArticleInput from "./components/ArticleInput";
import "./App.css";

function App() {
  console.log("function body running");
  return (
    <div>
      <p>App jsx running</p>
      <ArticleList />
      <ArticleInput />
    </div>
  );
}

export default App;
