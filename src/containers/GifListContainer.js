import React, { Component } from 'react'
import GifList from "../components/GifList.js"
import GifSearch from "../components/GifSearch.js"

export default class GifListcontainer extends Component {
  state = {
    gifs: []
  }

  componentDidMount() {
    this.fetchGifs("")
  }


  render() {
    return (
      <div>
        <GifSearch submitSearch={this.fetchGifs.bind(this)}/>
        <GifList gifs={this.state.gifs}/>
      </div>
    )
  }

  fetchGifs(query) {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=q0OFALSMXkxXhrmk99FEraZWTIHFbiJN&rating=g&limit=10`)
    .then(resp => resp.json())
    .then(json => this.setState({gifs: json.data}))
  }


}