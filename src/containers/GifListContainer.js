import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {
  constructor() {
    super()
    this.state = { gifs: [] }
  }

  componentDidMount() {
    this.fetchGifs()
  }

  fetchGifs(query = "") {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=jTz3tzORou7OjlN5AkNo62KdhTppYc1G&rating=g&limit=3`)
    .then(resp => resp.json())
    .then(json => this.setState({gifs: json.data}))
  }

  render() {
    return (
      <div id="gif-container">
        <GifList gifs={this.state.gifs}/>
        <GifSearch fetchGifs={this.fetchGifs.bind(this)}/>
      </div>
    )
  }
}

export default GifListContainer