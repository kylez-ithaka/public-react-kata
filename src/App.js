import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Link from "./Link.react";
import Button from "./Button.react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <Link page="https://jstor.org">See JSTOR</Link>

        <Button>Button Here!</Button>
      </header>
    </div>
  );
}

export default App;
