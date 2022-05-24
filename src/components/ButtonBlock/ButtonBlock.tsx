import React from "react";
import {Button} from "./Button/Button";
import {MAXVALUE} from "../../App";


type ButtonBlockPropsType = {
  setCountCallback: () => void
  setResetCallback: () => void
  count:number
}

export const ButtonBlock = (props: ButtonBlockPropsType) => {
  return (
    <div>
      <Button setCountCallback={props.setCountCallback}
              isDisabled={props.count>MAXVALUE-1} name={'INC'} />
      <span>     </span>
      <Button setCountCallback={props.setResetCallback}
              isDisabled={props.count<MAXVALUE} name={'reset'}/>
    </div>
  )
}