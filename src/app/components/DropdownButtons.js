import React, { Component } from 'react'
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom'

class DropdownButtons extends Component {
   state = {
      showBtns: false
    };

  toggle = () =>
    this.setState({showBtns: !this.state.showBtns});


  render() {
    const { activate, deactivate, isActive, selectItem, item } = this.props

    return (
      <ButtonDropdown isOpen={this.state.showBtns} toggle={this.toggle}>
        <DropdownToggle caret>
          Actions
        </DropdownToggle>
        <DropdownMenu>
          {
            isActive
            ?  <DropdownItem onClick={() => deactivate(item.id)}>Deactivate</DropdownItem>
            :  <DropdownItem onClick={() => activate(item.id)}>Activate</DropdownItem>
          }
          <DropdownItem onClick={() => selectItem(item)}><Link to='/info'>Stats</Link></DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    )
  }
}

export default DropdownButtons
