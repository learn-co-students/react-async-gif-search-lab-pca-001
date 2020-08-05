import React, { Component } from 'react'


export default class GifSearch extends Component {
  state = {
    query: ""
  }


  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <label>Gif Search:</label>
        <input onChange={e => this.handleInputChange(e)} value={this.state.query} />
        <button type="submit">Search</button>
      </form>
    )
  }

  handleInputChange = e => {
    this.setState({query: e.target.value})
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.submitSearch(this.state.query)
  }
}