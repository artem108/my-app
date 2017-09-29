import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class NewsList extends Component {
  showFull() {
    console.log('WILL BE FULL NEWS');
  }
  showList() {
    return this.props.news.map((key) => {
      return (
        <section className="main-news-box" key={key.id + key.title + key.description}>
            <header className="header-news-title">
              <p>{key.title}</p>
            </header>
            <section className={"news-image-" + key.id}>
            </section>
            <section className="short-description">
              <p>{key.description}</p>
            </section>
            <div  className="read-more" >
              <a onClick={this.showFull.bind(this)}>Read more...</a>
            </div>
          </section>
      )
    })
  }
  render() {
    return (
      <div>
        {this.showList()}
        </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    news:state.news
  }

}

export default connect (mapStateToProps)(NewsList)
