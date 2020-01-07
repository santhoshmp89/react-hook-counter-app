import React, { useState } from "react";

const Counter = props => {
  const [count, setCount] = useState(props.count);

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
