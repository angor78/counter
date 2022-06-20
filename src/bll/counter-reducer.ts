const initialState = {
  start: 0,
  current: 0,
  target: 0
}
export type InitialStateType = typeof initialState
export const counterReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
  switch (action.type) {
    case 'INC-VALUE':
      return {...state, current: state.current + 1}
    case 'START-VALUE':
      return {...state, start: action.startValue}
    case 'TARGET-VALUE':
      return {...state, target: action.targetValue}
    case 'SET-CURRENT-VALUE':
      return {...state, current: state.start}
    case "SET-VALUES-FROM-LOCAL-STORAGE":
      return {...state, current: action.currentValue}
    default:
      return state

  }
}

//ACTION CREATOR
export type ActionType = IncCurrentValueACType |
  SetValuesFromLocalStorageACType |
  GetStartACType |
  GetTargetACType |
  SetCurrentValueACType

export type IncCurrentValueACType = ReturnType<typeof incCurrentValueAC>
export const incCurrentValueAC = () => {
  return {type: 'INC-VALUE'} as const
}

export type GetStartACType = ReturnType<typeof getStartAC>
export const getStartAC = (startValue: number) => {
  return {type: 'START-VALUE', startValue} as const
}

export type GetTargetACType = ReturnType<typeof getTargetAC>
export const getTargetAC = (targetValue: number) => {
  return {type: 'TARGET-VALUE', targetValue} as const
}

export type SetCurrentValueACType = ReturnType<typeof setCurrentValueAC>
export const setCurrentValueAC = () => {
  return {type: 'SET-CURRENT-VALUE'} as const
}


export type SetValuesFromLocalStorageACType = ReturnType<typeof setValuesFromLocalStorageAC>
export const setValuesFromLocalStorageAC = (currentValue: number) => {
  return {type: 'SET-VALUES-FROM-LOCAL-STORAGE', currentValue} as const
}


