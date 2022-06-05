import React, {ChangeEvent} from "react";
import s from './SetCounterDisplay.module.css'
import {CounterType} from "../../App";


type SetCounterDisplayType = {
  setStart: (startValue: number) => void
  setTarget: (targetValue: number) => void
  counter: CounterType
}
export const SetCounterDisplay = (props: SetCounterDisplayType) => {
  let isPositive = props.counter.start >= 0 && props.counter.target >= 0
  let isStartLessTarget = props.counter.start < props.counter.target

  function onChangeStart(e: ChangeEvent<HTMLInputElement>) {
    let startValue = Number(e.currentTarget.value)
    props.setStart(startValue)
  }

  function onChangeTarget(e: ChangeEvent<HTMLInputElement>) {
    let targetValue = Number(e.currentTarget.value)
    props.setTarget(targetValue)
  }

  let inputClass = `${
    isStartLessTarget && isPositive ? s.baseInput : s.red}`
  return (
    <div className={s.display}>
      <div className={s.inputItem}>
        <span>&nbsp;&nbsp;start: </span>
        <input type="number" className={inputClass} onChange={onChangeStart} placeholder={'' + props.counter.start}/>
      </div>
      <div className={s.inputItem}>
        <span>target: </span>
        <input type="number" className={inputClass} onChange={onChangeTarget}
               placeholder={'' + props.counter.target}/>
      </div>
    </div>
  )
}