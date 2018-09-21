import React from 'react'
import DropdownButtons from './DropdownButtons'

const Item = ({ item, activate, deactivate, selectItem }) => {
  return (
    <tr>
        <td>{item.status}</td>
        <td>{item.name}</td>
        <td>{item.views_last_month}</td>
        <td>{item.total_views}</td>
        <td>
          <DropdownButtons
            id={item.id}
            item={item}
            isActive={item.status === 'ACTIVE'}
            activate={activate}
            deactivate={deactivate}
            selectItem={selectItem}
          />
        </td>
    </tr>
  )
}

export default Item
