import React from 'react';
import { useState } from 'react';

function Button() {
    const [count, setCount] = useState(0);
    //simple function 
//   const handleClick = () => {
//     alert('Button clicked!');
//   };

//usestate called
const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      <p>You clicked {count} times</p>
    </div>
  );

}

export default Button;
