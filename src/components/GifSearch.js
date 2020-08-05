import React, { Component } from 'react'

export default class GiftSearch extends Component {
  state = {
    search: ''
  }

  submitHandler = (event) => {
    event.preventDefault()
    this.props.searchGif(this.state.search)
  }

  inputHandler(event) {
    this.setState({search: event.target.value})
  }

  render(){
    return(
      <form onSubmit={ event => this.submitHandler(event)}>
        <label>Gif Search:</label>
        <input onChange={event => this.inputHandler(event)} value={this.state.search} />
        <button type="submit">Search</button>
      </form>
    )
  }
}
