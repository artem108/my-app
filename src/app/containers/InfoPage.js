import React, { Component } from 'react'
import { connect } from 'react-redux'
import Modal from 'react-modal'
import InfoModal from '../components/InfoModal'
import { getModalStyles } from '../helpers'

Modal.setAppElement('#root')

class InfoPage extends Component {
  state = {
    showModal: true
  }

  toggleModal = () =>
    this.setState({showModal: false})

  render() {
    const { item, data, isLoad } = this.props

    return (
      <Modal
        isOpen={this.state.showModal}
        style={getModalStyles()}
      >
        {
          isLoad
          ? 'Loading...'
          : <InfoModal toggleModal={this.toggleModal} item={item} info={data}/>
        }
        {
          data.error && <h2 className="err">Something went wrong :(</h2>
        }
      </Modal>
    );
  }
}

const mapStateToProps = state => {
  return {
    item: state.main.selectedItem.item,
    data: state.main.selectedItem.info,
    isLoad: state.main.isLoad
  }
}

export default connect(mapStateToProps)(InfoPage)
