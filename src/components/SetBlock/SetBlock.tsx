import {Button} from "../ButtonBlock/Button/Button";
import React from "react";
import s from 'SetBlock.module.css'

export const SetBlock = () => {
  return (
    <div className={s.setBlock}>
      <input id='startValue' type="text" placeholder={'start'}/>
      <Button name={'set'} isDisabled={false} setCountCallback={() => {
      }}/>
      <input id='targetValue' type="text" placeholder={'target'}/>

    </div>
  )
}