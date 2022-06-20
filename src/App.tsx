import React, {useState} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./bll/store";
import {
  getStartAC,
  getTargetAC,
  incCurrentValueAC,
  setCurrentValueAC
} from "./bll/counter-reducer";
import {Display} from "./components/Display/Display";
import {Button} from "./components/Button/Button";
import {SetCounterDisplay} from "./components/SetCounterDisplay/SetCounterDisplay";


export type ButtonPropsType = {
  setCountCallback: () => void
  isDisabled: boolean
  name: string
}
export type CounterValueType = {
  start: number,
  current: number,
  target: number
}

function App() {
  const [settingMode, setSettingMode] = useState<boolean>(false)

  const counter = useSelector<AppStateType, CounterValueType>(state => state.counter)

  const dispatch = useDispatch()
  const setCountCallbackHandler = () => {
    dispatch(incCurrentValueAC())
  }
  const getStart = (startValue: number) => {
    dispatch(getStartAC(startValue))
  }
  const getTarget = (targetValue: number) => {
    dispatch(getTargetAC(targetValue))
  }
  const setCurrentValue = () => {
    dispatch(setCurrentValueAC())
    setSettingMode(false)
  }

  return (

    <div className="App">
      <div>
        <div className='counterBlock'>
          <SetCounterDisplay getStart={getStart} getTarget={getTarget} counter={counter}/>
          <Button name={"set"} setCountCallback={setCurrentValue} isDisabled={counter.start >= counter.target}/>
        </div>
        <div className='counterBlock'>
          <Display counter={counter}/>
          <Button name={"inc..+"} setCountCallback={setCountCallbackHandler}
                  isDisabled={counter.current >= counter.target}/>
          <Button name={"reset"} setCountCallback={setCurrentValue} isDisabled={false}/>
        </div>
      </div>
      <div>
        {settingMode
          ? (
            <div className='counterBlock'>
              <SetCounterDisplay getStart={getStart} getTarget={getTarget} counter={counter}/>
              <Button name={"set"} setCountCallback={setCurrentValue}
                      isDisabled={counter.start >= counter.target}/>
            </div>)
          : (
            <div className='counterBlock'>
              <Display counter={counter}/>
              <Button name={"inc..+"} setCountCallback={setCountCallbackHandler}
                      isDisabled={counter.current >= counter.target}/>
              <Button name={"reset"} setCountCallback={setCurrentValue} isDisabled={false}/>
              <Button name={"set"} setCountCallback={() => setSettingMode(true)} isDisabled={false}/>
            </div>
          )
        }
      </div>
    </div>
  );
}

export default App;
