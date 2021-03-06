import {AppStateType} from "../store";


export const loadState = () => {
  try {
    let serializedState = localStorage.getItem('app-state')
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (e) {
    return undefined
  }

}

export const saveState = (state: AppStateType) => {
  try {
    let serializedState = JSON.stringify(state)
    localStorage.setItem('app-state',serializedState)
  } catch {
    //ignore error
  }
}
