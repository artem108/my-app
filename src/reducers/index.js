import { combineReducers } from 'redux'
// import entranceReducers from '../Entrance/entranc'
import homeReducer from '../Main/reducers/homeReducer'
import selectorsText from '../Main/reducers/selectors'
import mySkillsReducer from '../Main/reducers/mySkillsReducer'

const allReducers = combineReducers ({

  // entrance: entranceReducers,
  home: homeReducer,
  selector: selectorsText,
  mySkillsReducer:mySkillsReducer
});

export default allReducers
