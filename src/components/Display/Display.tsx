import React from "react";
import s from './Display.module.css'
import {MAXVALUE} from "../../App";

type DisplayPropsType={
  count:number
}
export const Display = (props: DisplayPropsType) => {
  let displayClass = `${props.count<MAXVALUE?s.display:s.displayEndCount}`

  return (
    <div className={displayClass}>{props.count}</div>
  )
}