"use client";

import { useCallback, memo, useState } from "react";

const State = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []);

  console.log("👨 Parent Render");

  return (
    <div>
      <h1>Count: {count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <Child onClick={handleClick} />
    </div>
  );
};

const Child = (onClick:any) => {
  console.log("👶 Child Render");

  return (
    <button onClick={onClick}>
      Child Button
    </button>
  );
};

export default State;