export const selectHome = (tex) => {
  console.log('now text is', tex.text);
    return {
      type: 'SELECTED_HOME',
      payload: tex
    }
}
