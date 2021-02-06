import './App.css';
import {Router} from "@reach/router";
import LabelOne from "./components/LabelOne";
import LabelAdd from "./components/LabelAdd";
import LabelEdit from "./components/LabelEdit";
import LabelAll from "./components/LabelAll";

function App() {
  return (
    <div className="App">
      <Router>
        <LabelAdd path="/label/new" />
        <LabelAll path="/" />
        <LabelEdit path="/label/:labelling_id/edit" />
        <LabelOne path="/label/:id" />
      </Router>

    </div>
  );
}

export default App;
