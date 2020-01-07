import React, { useState, useEffect } from "react";

const Counter = props => {
  const [count, setCount] = useState(props.count);

  useEffect(() => {
    console.log("useeffect calling");
  });

  return (
    <div>
      <h2>Counter</h2>
      <button onClick={() => setCount(count - 1)}>-1</button> {count}{" "}
      <button onClick={() => setCount(count + 1)}>+1</button>
      <br />
      <button onClick={() => setCount(props.count)}>Reset</button>
    </div>
  );
};

export default Counter;
