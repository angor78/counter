import React, {useState} from 'react';
import './App.css';
import {Display} from "./components/Display/Display";
import {ButtonBlock} from "./components/ButtonBlock/ButtonBlock";
import {SetBlock} from "./components/SetBlock/SetBlock";

export let MAXVALUE = 5
export let STARTVALUE = 0

export type ButtonPropsType = {
  setCountCallback: () => void
  isDisabled: boolean
  name: string
}

function App() {
  const [count, setCount] = useState<number>(STARTVALUE)

  const setCountCallbackHandler = () => {
    if (count < MAXVALUE) {
      setCount(count + 1)
    }
  }

  const setResetCallbackHandler = () => {
    setCount(0)
  }

  return (
    <div className="App">
      <div className='body'>
        <SetBlock/>
        <Display count={count}/>
        <ButtonBlock setCountCallback={setCountCallbackHandler}
                     setResetCallback={setResetCallbackHandler}
                     count={count}
        />
      </div>

    </div>
  );
}

export default App;
