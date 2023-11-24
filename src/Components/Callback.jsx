// ParentComponent.js
import React, { useState, useCallback } from 'react';

export const Callback = () => {
  const [message, setMessage] = useState('');

  // Define the callback function using useCallback
  const handleClick = useCallback(() => {
    setMessage('Button clicked!');
  }, [setMessage]);

  return (
    <div>
      <h1>Parent Component</h1>
      <button onClick={handleClick}>Click me</button>
      <ChildComponent onButtonClick={handleClick} />
      <p>{message}</p>
    </div>
  );
};



export const ChildComponent = ({ onButtonClick }) => {
  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={onButtonClick}>Click me in Child</button>
    </div>
  );
};

