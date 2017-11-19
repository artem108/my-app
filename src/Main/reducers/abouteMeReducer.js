import { SELECTED_ABOUTE_ME } from '../../constants/constants'

const initialState =     {
      id: 3,
      title: 'Aboute me',
      answer_question: [
        'Hello, my name Artem',
        'Hi Artem nice to meet you!',
        'Tehnical skills it good, but let me show some info aboye me',
        'ok... Musick?',
        'Yes song1, song2, song3',
        'Nice what yet?',
        'This _.|..'


      ]
    }



export default function (state = initialState, action) {

  switch (action.type) {
  case SELECTED_ABOUTE_ME:
    return { ...state, aboute: action.payload }

  default:
    return state;
  }
}
