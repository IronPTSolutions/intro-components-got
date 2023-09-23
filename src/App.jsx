import Episodes from "./components/episodes/episodes";
import Header from "./components/header/header";
import Search from "./components/search/search";
import SeasonFilter from "./components/season-filter/season-filter";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <SeasonFilter seasons={8} />
        <Search />
        <Episodes />
      </div>
    </div>
  );
}

export default App;
