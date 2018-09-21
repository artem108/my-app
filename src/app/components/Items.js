import React from 'react'
import Item from './Item'

const Items = ({ data, activate, deactivate, selectItem }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <td>Status</td>
          <td>Name</td>
          <td>Last month views</td>
          <td>Total views</td>
          <td>Actions</td>
        </tr>
      </thead>
      <tbody>
          {
            data.map((item, key) =>
              <Item
                key={key}
                item={item}
                activate={activate}
                deactivate={deactivate}
                selectItem={selectItem}
              />)
          }
      </tbody>
    </table>
  )
}

export default Items
