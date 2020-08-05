import React, { Component } from 'react'

class GifSearch extends Component {
  constructor(){
    super()
    this.state = { query: "" }
  }

  handleInput = (event) => {
    this.setState({ query: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.fetchGifs(this.state.query)
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleInput}></input>
        <button type="submit">Search</button>
      </form>
    )
  }
}

export default GifSearch