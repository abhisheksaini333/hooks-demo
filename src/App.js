import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Tick from './components/Tick';
import DataFetch from './components/DataFetch';
import ComponentX from './components/ComponentX';
import Title1 from './components/Title1';
import Title2 from './components/Title2';

export const TopLevelContext = React.createContext();
export const CourseContext = React.createContext();

function App() {
  const initislState = 0;
  const [count, setCount] = useState(initislState)
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
      <Title1/>
      <Title2/>
      <ArrayApp/>
      <Tick/>
      <DataFetch/>
      <TopLevelContext.Provider value={'I am from Top level!!'}>
        <CourseContext.Provider value={'React course'}>
          <ComponentX/>
        </CourseContext.Provider>
      </TopLevelContext.Provider>
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
