import React, { useState, useEffect } from 'react';

function UseEffectHook() {
  const [count, setCount] = useState(0);

  // This useEffect runs after every render
  useEffect(() => {
    console.log("Runs every time!");
  });

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>
    </div>
  );
}

export default UseEffectHook;

