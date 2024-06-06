import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Hello from "./components/Hello";
import Saikat from "./components/Saikat";
import Shanto from "./components/Shanto";
import Fruits from "./components/fruits";
import Fruit from "./components/fruit";
import ConditionalComponent from "./components/ConditionalComponent";

function App() {
  const [count, setCount] = useState(0);
  const person = {
    name: "Saikat",
    message: "Hi There",
    emoji: "wooo",
    seatNumber: [1, 4, 7],
  };
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <div className="Hello">
        <Hello person={person} age={10} />
        {/* <Hello name="Shanto" message="Do Codes" />
        <Hello name="Mash" message="Bowling Man" /> */}
      </div>
      <div className="Saikat">
        <Saikat />
      </div>
      <div className="Shanto">
        <Shanto />
      </div>
      <div className="fruits">
        <Fruits />
      </div>
      <div className="fruit">
        <Fruit />
      </div>
      <div className="ConditionalComponent">
        <ConditionalComponent />
      </div>
    </>
  );
}

export default App;
