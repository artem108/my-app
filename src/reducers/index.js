import { combineReducers } from 'redux'
import exampleReducers from './example'

const allReducers = combineReducers ({

  examples: exampleReducers

});

export default allReducers
