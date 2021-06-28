import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)
  const increaseByTwo = () => {
    for (let i=0; i< 2; i++) {
      setCount(prevCount => prevCount + 1)
    }
  }
  return (
    <div className="App">
      <header>
          Learn React Hooks
      </header>
      <h4>Value of count: {count}</h4>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <button onClick={() => setCount(count - 1)}>Decrease Count</button>
      <button onClick={increaseByTwo}>Increase By two</button>
      <ArrayApp/>
    </div>
  );
}

const ArrayApp = () => {
  const [array, setArray ] = useState([]);
  const setNumber = () => {
    setArray(
      [
        ...array,
        {
          id: array.length,
          value: Math.round(Math.random() * 1000)
        }
      ]
    )
  }

  return (
    <>
      <button onClick={setNumber}>Add Number</button>
      {
        array.map((item, index) => {
          return <div key={item.id}>{item.value}</div>
        })
      }
    </>
  )
}

export default App;
