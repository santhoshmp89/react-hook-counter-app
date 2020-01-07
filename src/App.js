import React from "react";
import "./styles.css";
import Counter from "./components/Counter";

export default function App() {
  return (
    <div className="App">
      <Counter count={10} />
    </div>
  );
}
