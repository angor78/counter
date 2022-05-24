import React, {useState} from 'react';
import './App.css';
import {Display} from "./components/Display/Display";
import {ButtonBlock} from "./components/ButtonBlock/ButtonBlock";

export const MAXVALUE = 5
export const STARTVALUE = 0


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
