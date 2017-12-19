import { LOGIN } from '../constants/constants'

const initialState = { login: localStorage.getItem("login")}



export default function (state = initialState, action) {

  switch (action.type) {
  case LOGIN:
    return { ...state, aboute: action.payload }

  default:
    return state;
  }
}
