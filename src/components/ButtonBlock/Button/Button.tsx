import React from "react";
import s from './Button.module.css'


type ButtonPropsType = {
  setCountCallback: () => void
  isDisabled: boolean
  name: string
}

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