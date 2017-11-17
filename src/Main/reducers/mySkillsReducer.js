import { SELECTED_SKILLS } from '../../constants/constants'

const initialState =  {
    id: 2,
    title: 'My Skills',
    text: {
      technologies: [ 'strong knowledge of HTML5, CSS3',
                    'Bootstrap, PSD to HTML, Media queries, Pixel perfect, BEM' ,
                    'SASS, LESS',
                    'Bootstrap, PSD to HTML, Media queries, Pixel perfect, BEM',
                    'strong knowledge  JavaScript ES5/ES6, OOP, MVC',
                    'good knowledge jQuery',
                    'basic knowledge Angular js, React js, TypeScript',
                    'npm, Gulp, Grunt',
                    'Git-Bash',
                    'Adobe Photoshop'
                  ]

    }
  }

export default function (state = initialState, action) {

  switch (action.type) {
  case SELECTED_SKILLS:
    return { ...state, skills: action.payload }

  default:
    return state;
  }
}
