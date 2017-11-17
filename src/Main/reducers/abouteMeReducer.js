import { SELECTED_ABOUTE_ME } from '../../constants/constants'

const initialState =     {
      id: 3,
      title: 'Aboute me',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    }



export default function (state = initialState, action) {

  switch (action.type) {
  case SELECTED_ABOUTE_ME:
    return { ...state, aboute: action.payload }

  default:
    return state;
  }
}
