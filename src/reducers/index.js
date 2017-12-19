import { combineReducers } from 'redux'
import loginUser from '../Entrance/reducer'
import homeReducer from '../Main/reducers/homeReducer'
import mySkillsReducer from '../Main/reducers/mySkillsReducer'
import abouteMeReducer from '../Main/reducers/abouteMeReducer'


const rootReducer = combineReducers ({
  login: loginUser,
  home: homeReducer,
  skills: mySkillsReducer,
  aboute: abouteMeReducer
});

export default rootReducer
