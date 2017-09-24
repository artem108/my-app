import { combineReducers } from 'redux'
import entranceReducers from '../Entrance/entranc'
import newsReducers from '../Main/Menu/News/reducers/ReduceNews'

const allReducers = combineReducers ({

  entrance: entranceReducers,
  news: newsReducers

});

export default allReducers
