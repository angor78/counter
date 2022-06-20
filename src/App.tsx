import React from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./bll/store";
import {incValueAC} from "./bll/counter-reducer";



// export type ButtonPropsType = {
//   setCountCallback: () => void
//   isDisabled: boolean
//   name: string
// }

function App() {

  const value = useSelector<AppStateType,number>(state => state.counter.start)
  const dispatch = useDispatch()

  const setCountCallbackHandler = () => {
    dispatch(incValueAC())
    // if (counter.current < counter.target) {
    //   setCounter({...counter, current: counter.current + 1})
    // }
  }

  // const [counter, setCounter] = useState<CounterType>({start: 0, current: 0, target: 5})
  // const [settingMode, setSettingMode] = useState<boolean>(false)
  // useEffect(() => {
  //   let startValueString = localStorage.getItem('startValue')
  //   let targetValueString = localStorage.getItem('targetValue')
  //   if (startValueString && targetValueString) {
  //     let startNumber = JSON.parse(startValueString)
  //     let targetNumber = JSON.parse(targetValueString)
  //     setCounter({
  //       ...counter,
  //       start: startNumber,
  //       current: startNumber,
  //       target: targetNumber
  //     })
  //   }
  //
  // }, [])
  //
  // let isPositive = counter.start >= 0 && counter.target >= 0
  // let isStartLessTarget = counter.start < counter.target
  //
  // const setCountCallbackHandler = () => {
  //   if (counter.current < counter.target) {
  //     setCounter({...counter, current: counter.current + 1})
  //   }
  // }
  // const resetCallbackHandler = () => {
  //   setCounter({...counter, current: counter.start})
  // }
  //
  // function setStart(startValue: number) {
  //   localStorage.setItem("startValue", JSON.stringify(startValue))
  //   setCounter({...counter, start: startValue})
  // }
  //
  // function setTarget(targetValue: number) {
  //   localStorage.setItem("targetValue", JSON.stringify(targetValue))
  //   setCounter({...counter, target: targetValue})
  // }


  // function getFromLocalStorage() {
  //   let startValueString = localStorage.getItem('startValue')
  //   let targetValueString = localStorage.getItem('targetValue')
  //   if (startValueString && targetValueString) {
  //     let startNumber = JSON.parse(startValueString)
  //     let targetNumber = JSON.parse(targetValueString)
  //     setCounter({
  //       ...counter,
  //       start: startNumber,
  //       current: startNumber,
  //       target: targetNumber
  //     })
  //   }
  //   setSettingMode(false)
  // }

  // function clearLocalStorage() {
  //   localStorage.clear()
  //   setCounter({...counter, start: 0, current: 0, target: 5})
  // }

  return (
    <div className="App">
      {value}
      <button onClick={setCountCallbackHandler}>inc+...</button>
      {/*<div>*/}
      {/*  <div className='counterBlock'>*/}
      {/*    <SetCounterDisplay setStart={setStart} setTarget={setTarget} counter={counter}/>*/}
      {/*    <Button name={"set"} setCountCallback={getFromLocalStorage} isDisabled={!(isStartLessTarget && isPositive)}/>*/}
      {/*    /!*<Button name={"clear"} setCountCallback={clearLocalStorage} isDisabled={false}/>*!/*/}
      {/*  </div>*/}
      {/*  <div className='counterBlock'>*/}
      {/*    <Display counter={counter}/>*/}
      {/*    <Button name={"inc..+"} setCountCallback={setCountCallbackHandler}*/}
      {/*            isDisabled={counter.current >= counter.target}/>*/}
      {/*    <Button name={"reset"} setCountCallback={resetCallbackHandler} isDisabled={false}/>*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div>*/}
      {/*  {settingMode*/}
      {/*    ? (*/}
      {/*    <div className='counterBlock'>*/}
      {/*      <SetCounterDisplay setStart={setStart} setTarget={setTarget} counter={counter}/>*/}
      {/*      <Button name={"set"} setCountCallback={getFromLocalStorage}*/}
      {/*              isDisabled={!(isStartLessTarget && isPositive)}/>*/}
      {/*      /!*<Button name={"clear"} setCountCallback={clearLocalStorage} isDisabled={false}/>*!/*/}
      {/*    </div>)*/}
      {/*    : (*/}
      {/*    <div className='counterBlock'>*/}
      {/*      <Display counter={counter}/>*/}
      {/*      <Button name={"inc..+"} setCountCallback={setCountCallbackHandler}*/}
      {/*              isDisabled={counter.current >= counter.target}/>*/}
      {/*      <Button name={"reset"} setCountCallback={resetCallbackHandler} isDisabled={false}/>*/}
      {/*      <Button name={"set"} setCountCallback={()=>setSettingMode(true)} isDisabled={false}/>*/}
      {/*    </div>*/}
      {/*  )*/}
      {/*  }*/}
      {/*</div>*/}
    </div>
  );
}

export default App;
