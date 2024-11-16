import React, { useState, useRef } from 'react';

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
  };

  const stopTimer = () => {
    if (isRunning) {
      clearInterval(intervalRef.current);
      setIsRunning(false);
    }
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setTime(0);
    setIsRunning(false);
  };

  return (
    <div >
      <h2>Timer.js</h2>
      <div>{new Date(time * 1000).toISOString().substr(11, 8)}</div>
      <button onClick={startTimer} style={{ backgroundColor: 'green' }}>Start</button>
      <button onClick={stopTimer} style={{ backgroundColor: 'red' }}>Stop</button>
      <button onClick={resetTimer} style={{ backgroundColor: 'orange' }}>Reset</button>
    </div>
  );
};

export default Timer;
