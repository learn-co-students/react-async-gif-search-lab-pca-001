import React, { Component } from 'react'

class GifSearch extends Component {
  // a controlled form where we initially set state to empty string
  state = {
    query: ""
  }

  // where we hanlde the submit from the form. In this case we use fetchGIFs from gif container
  handleSubmit = event => {
    event.preventDefault()
    this.props.fetchGIFs(this.state.query)
  }

  // where we render our form. We also change our state here to whatever was passed in
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.query} onChange={event => this.setState({query: event.target.value})} />
        </form>
      </div>
    )
  }

}

export default GifSearch