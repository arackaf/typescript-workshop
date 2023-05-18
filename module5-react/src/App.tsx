import { Component1 } from "./Component1";
import { Component2 } from "./Component2";
import "./App.css";
import { useState } from "react";

function App() {
  const [num, setNum] = useState(12);
  return (
    <main>
      <Component1 str="Hello World" num={num} handler={() => setNum((x) => x + 1)} />
      <br />
      <Component2 title="Yo!">
        <span>Hope you like my content</span>
      </Component2>
    </main>
  );
}

export default App;
