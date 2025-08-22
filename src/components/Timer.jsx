import React, { useEffect } from 'react';

function Timer() {
  useEffect(() => {
    const interval = setInterval(() => {
      console.log('Timer running...');
    }, 1000);

    // Cleanup function runs when the component unmounts
    return () => {
      clearInterval(interval);
      console.log('Timer stopped');
    };
  }, []);

  return <h1>Check Console</h1>;
}

export default Timer;
