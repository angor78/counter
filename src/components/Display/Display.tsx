import React from "react";
import s from './Display.module.css'
import {CounterValueType} from "../../App";

type DisplayType = {
  counter: CounterValueType
}

export const Display = (props: DisplayType) => {
  let displayClass = `${props.counter.target > props.counter.current ? s.display : s.display + ' ' + s.red}`
  return (
    <div className={displayClass}>
      {props.counter.current}
    </div>
  )
}
