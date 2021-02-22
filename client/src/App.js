import './App.css';
import {Router} from "@reach/router";
import AnimeMoviesOne from "./components/AnimeMoviesOne";
import AnimeMoviesAdd from "./components/AnimeMoviesAdd";
import AnimeMoviesEdit from "./components/AnimeMoviesEdit";
import AnimeMoviesAll from "./components/AnimeMoviesAll";

function App() {
  return (
    <div className="App">
      <Router>
        <AnimeMoviesAdd path="/animeMovies/new" />
        <AnimeMoviesAll path="/animeMoviesListing" />
        <AnimeMoviesEdit path="/animeMovies/:animeMovies_id/edit" />
        <AnimeMoviesOne path="/animeMovies/:id" />
      </Router>

    </div>
  );
}

export default App;
