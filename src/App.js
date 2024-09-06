import logo from './logo.svg';
import React from 'react';
import './App.css';
import { useRef } from 'react';

function App() {

  const inputRef = useRef(null);

  const focusInput = () => {
    if(inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <h1>Use useRef</h1>
      <input ref={inputRef} type='text' placeholder='Click the button to focus me' />
      <button onClick={focusInput}>Focus the input</button>
    </div>
  );
}

export default App;
