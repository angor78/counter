import React from "react";
import s from './Button.module.css'
import {ButtonPropsType} from "../../../App";


export const Button = (props: ButtonPropsType) => {
  const onClickHandle = () => {
    props.setCountCallback()
  }
  return (
    <button className={s.default}
            onClick={onClickHandle}
            disabled={props.isDisabled}>{props.name}</button>
  )
}