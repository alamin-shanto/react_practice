import { useState } from "react";

export default function Counter() {
  const [Count, setCount] = useState(0);
  const [IncrementBy, setIncrementBy] = useState(1);
  function increment() {
    setCount(Count + IncrementBy);
  }
  function decrement() {
    setCount(Count - IncrementBy);
  }
  function IncreaseIncrement() {
    setIncrementBy(IncrementBy + 1);
  }
  function DecreaseIncrement() {
    setIncrementBy(IncrementBy - 1);
  }
  return (
    <div>
      {" "}
      <h1>Count value is: {Count}</h1>
      <button onClick={increment}>Increment</button> {""}
      <button onClick={decrement}> Decrement</button>
      <h1>We are incrementing the value by : {IncrementBy}</h1>
      <button onClick={IncreaseIncrement}>Increase Increment</button>
      <button onClick={DecreaseIncrement}>Decrease Increment</button>
    </div>
  );
}
