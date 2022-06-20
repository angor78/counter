const initialState = {
  start: 0,
  current: 0,
  target: 0
}
export type InitialStateType = typeof initialState

export const counterReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
  switch (action.type) {
    case 'INC':
      return {...state, start: state.start + 1}
    case "SET-VALUES-FROM-LOCAL-STORAGE":
      return {...state, start: action.startValue, target: action.targetValue}
    default:
      return state

  }
}
export type ActionType = IncValueACType | SetValuesFromLocalStorageACType
export type IncValueACType = ReturnType<typeof incValueAC>
export const incValueAC = () => {
  return {type: 'INC'} as const
}

export type SetValuesFromLocalStorageACType = ReturnType<typeof setValuesFromLocalStorageAC>
export const setValuesFromLocalStorageAC = (startValue: number, targetValue: number) => {
  return {type: 'SET-VALUES-FROM-LOCAL-STORAGE', startValue, targetValue} as const
}
