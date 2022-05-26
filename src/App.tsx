import React, {useEffect, useState} from 'react';
import './App.css';
import {Display} from "./components/Display/Display";
import {Button} from "./components/Button/Button";
import {SetCounterDisplay} from "./components/SetCounterDisplay/SetCounterDisplay";


export type ButtonPropsType = {
  setCountCallback: () => void
  isDisabled: boolean
  name: string
}
export type CounterType = {
  start: number
  current: number
  target: number
}

function App() {

  const [counter, setCounter] = useState<CounterType>({start: 0, current: 0, target: 5})
  useEffect(() => {
    let startValueString = localStorage.getItem('startValue')
    let targetValueString = localStorage.getItem('targetValue')
    if (startValueString && targetValueString) {
      let startNumber = JSON.parse(startValueString)
      let targetNumber = JSON.parse(targetValueString)
      setCounter({
        ...counter,
        start: startNumber,
        current: startNumber,
        target: targetNumber
      })
    }

  }, [])

  let isPositive = counter.start >= 0 && counter.target >= 0
  let isStartLessTarget = counter.start < counter.target

  const setCountCallbackHandler = () => {
    if (counter.current < counter.target) {
      setCounter({...counter, current: counter.current + 1})
    }
  }
  const resetCallbackHandler = () => {
    setCounter({...counter, current: counter.start})
  }

  function setStart(startValue: number) {
    localStorage.setItem("startValue", JSON.stringify(startValue))
    setCounter({...counter, start: startValue})
  }

  function setTarget(targetValue: number) {
    localStorage.setItem("targetValue", JSON.stringify(targetValue))
    setCounter({...counter, target: targetValue})
  }


  function getFromLocalStorage() {
    let startValueString = localStorage.getItem('startValue')
    let targetValueString = localStorage.getItem('targetValue')
    if (startValueString && targetValueString) {
      let startNumber = JSON.parse(startValueString)
      let targetNumber = JSON.parse(targetValueString)
      setCounter({
        ...counter,
        start: startNumber,
        current: startNumber,
        target: targetNumber
      })
    }
  }

  // function clearLocalStorage() {
  //   localStorage.clear()
  //   setCounter({...counter, start: 0, current: 0, target: 5})
  // }

  return (
    <div className="App">
      <div className='counterBlock'>
        <SetCounterDisplay setStart={setStart} setTarget={setTarget} counter={counter}/>
        <Button name={"set"} setCountCallback={getFromLocalStorage} isDisabled={!(isStartLessTarget && isPositive)}/>
        {/*<Button name={"clear"} setCountCallback={clearLocalStorage} isDisabled={false}/>*/}
      </div>
      <div className='counterBlock'>
        <Display counter={counter}/>
        <Button name={"inc..+"} setCountCallback={setCountCallbackHandler} isDisabled={counter.current >= counter.target}/>
        <Button name={"reset"} setCountCallback={resetCallbackHandler} isDisabled={false}/>
      </div>

    </div>
  );
}

export default App;
