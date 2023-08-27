import "./App.css";
import PostsList from "./components/PostsList";
import SearchPost from "./components/SearchPost";

function App() {
  return (
    <div>
      <SearchPost />
      <PostsList />
    </div>
  );
}

export default App;
