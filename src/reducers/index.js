import { combineReducers } from 'redux'
// import entranceReducers from '../Entrance/entranc'
import textReducer from '../Main/reducers/textReducer'
import selectorsText from '../Main/reducers/selectors'

const allReducers = combineReducers ({

  // entrance: entranceReducers,
  text: textReducer,
  selector: selectorsText
});

export default allReducers
