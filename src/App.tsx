import { useState } from "react";
import { Card } from "../src/components/Card";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Card></Card>
      <div>
        <input type="text" />
        <button>Pesquisar</button>
      </div>
    </div>
  );
}

export default App;
