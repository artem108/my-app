
export const getMonitoringsData = () =>
  fetch('https://535dda38-5c00-4da6-b710-089c280eb0b9.mock.pstmn.io/monitorings')
    .then(res => res.json())
    .catch(err => err.json())

export const activate = id => {
  const init = {
    method: 'POST'
  }
  return fetch(`https://535dda38-5c00-4da6-b710-089c280eb0b9.mock.pstmn.io/monitorings/${id}/activate`, init)
          .then(res => res.json())
          .catch(err => err.json())
}

export const deactivate = id => {
  const init = {
    method: 'POST'
  }
  return fetch(`https://535dda38-5c00-4da6-b710-089c280eb0b9.mock.pstmn.io/monitorings/${id}/activate`, init)
          .then(res => res.json())
          .catch(err => err.json())
}

export const selectItem = id =>
  fetch(`https://535dda38-5c00-4da6-b710-089c280eb0b9.mock.pstmn.io/monitorings/${id}/stats`)
    .then(res => res.json())
    .catch(err => err.json())
