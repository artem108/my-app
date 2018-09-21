import { activate, deactivate, getMonitoringsData, selectItem } from '../api.js'

const LOAD_DATA = 'LOAD_DATA'
const LOAD_DATA_OK = 'LOAD_DATA_OK'
const LOAD_DATA_ERR = 'LOAD_DATA_ERR'
const ACTIVATE_ITEM = 'ACTIVATE_ITEM'
const ACTIVATE_ITEM_OK = 'ACTIVATE_ITEM_OK'
const ACTIVATE_ITEM_ERR = 'ACTIVATE_ITEM_ERR'
const DEACTIVATE_ITEM = 'DEACTIVATE_ITEM'
const DEACTIVATE_ITEM_OK = 'DEACTIVATE_ITEM_OK'
const DEACTIVATE_ITEM_ERR = 'DEACTIVATE_ITEM_ERR'
const SELECT_ITEM = 'SELECT_ITEM'
const SELECT_ITEM_OK = 'SELECT_ITEM_OK'
const SELECT_ITEM_ERR = 'SELECT_ITEM_ERR'

const initialState = {
    data: [],
    selectedItem: {
      item: {},
      info: []
    },
    isLoad: false,
    err: false
  }

  export const getData = () => {
    return async dispatch => {
      dispatch({ type: LOAD_DATA })
      try {
        const data = await getMonitoringsData()
          dispatch({
            type: LOAD_DATA_OK,
            payload: data
          })
         } catch (err) {
          dispatch({
            type: LOAD_DATA_ERR,
            payload: err
          })
        }
      }
    }

  export const activateItem = id => {
    return async dispatch => {
      dispatch({ type: ACTIVATE_ITEM })
      try {
        const data = await activate(id)

        dispatch({
            type: ACTIVATE_ITEM_OK,
            payload: data
          })
         } catch (err) {
          dispatch({
            type: ACTIVATE_ITEM_ERR,
            payload: err.massage
          })
        }
      }
    }
    
  export const deactivateItem = id => {
    return async dispatch => {
      dispatch({ type: DEACTIVATE_ITEM })
      try {
        const data = await deactivate(id)
          dispatch({
            type: DEACTIVATE_ITEM_OK,
            payload: data
          })
         } catch (err) {
          dispatch({
            type: DEACTIVATE_ITEM_ERR
          })
        }
      }
    }

  export const selectItemStats = item => {
    return async dispatch => {
      dispatch({ type: SELECT_ITEM })
      try {
        const data = await selectItem(item.id)

          dispatch({
            type: SELECT_ITEM_OK,
            payload: {
              item,
              data
            }
          })
         } catch (err) {
          dispatch({
            type: SELECT_ITEM_ERR,
            err: err.massage
          })
        }
      }
    }

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DATA:
      return {
        ...state,
        isLoad: true
      }
    case LOAD_DATA_OK:
      return {
        ...state,
        data: action.payload,
        isLoad: false,
        err: false
      }
    case LOAD_DATA_ERR:
      return {
        ...state,
        isLoad: false,
        err: true
      }
    case SELECT_ITEM:
      return {
        ...state,
        isLoad: true
      }
    case SELECT_ITEM_OK:
      return {
        ...state,
        isLoad: false,
        selectedItem: {
          item: action.payload.item,
          info: action.payload.data
        }
      }
    case SELECT_ITEM_ERR:
      return {
        ...state,
        isLoad: false,
        err: action.payload
      }
    case ACTIVATE_ITEM:
    case ACTIVATE_ITEM_OK:
    case ACTIVATE_ITEM_ERR:
    case DEACTIVATE_ITEM:
    case DEACTIVATE_ITEM_OK:
    case DEACTIVATE_ITEM_ERR:
      return {
        ...state,
        err: true
      }
  default:
    return state
  }
}
