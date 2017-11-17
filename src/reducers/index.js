import { combineReducers } from 'redux'
// import entranceReducers from '../Entrance/entranc'
import homeReducer from '../Main/reducers/homeReducer'
import mySkillsReducer from '../Main/reducers/mySkillsReducer'
import abouteMeReducer from '../Main/reducers/abouteMeReducer'


const rootReducer = combineReducers ({
  // entrance: entranceReducers,
  home: homeReducer,
  skills: mySkillsReducer,
  aboute: abouteMeReducer
});

export default rootReducer
