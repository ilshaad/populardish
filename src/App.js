// import logo from './logo.svg';

import "./App.css";
import PopularDish from "./components/PopularDish/PopularDish";

function App() {
  return (
    <div className="App">
      {/* popular dish */}
      <div id="populardish">
        <PopularDish />
      </div>

      {/* my order */}
      <div id="myorder">
        <h3>My order</h3>
      </div>
    </div>
  );
}

export default App;
