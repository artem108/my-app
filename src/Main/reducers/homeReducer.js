import { SELECTED_HOME } from '../../constants/constants'

const initialState =     {
      id: 1,
      title: 'Home',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    }



export default function (state = initialState, action) {

  switch (action.type) {
  case SELECTED_HOME:
    return { ...state, home: action.payload }

  default:
    return state;
  }
}
