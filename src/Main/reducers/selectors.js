export default ( state = null, action ) => {
  switch (action.type) {
    case 'SELECTED_HOME':
        return action.payload
    default:
        return state
  }
}
