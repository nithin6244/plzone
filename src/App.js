import "./App.scss";
import Clubs from "./Components/Clubs";
import Header from "./Components/Header";
import Standings from "./Components/Standings";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="hero">
        <Clubs />
        <Standings />
      </div>
    </div>
  );
}

export default App;
