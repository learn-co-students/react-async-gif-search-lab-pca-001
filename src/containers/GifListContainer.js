import React, { Component } from 'react'

export default class GiftListContainer extends Component {

  state = {
    gifs: []
  }

  render() {
    return(
      <div>
        <GifSearch searchGif={this.fetchGifs.bind(this)} />
        <GifList gifs={this.state.gifs}/>
      </div>
    )
  }

  fetchGifs(search) {
    fetch(`https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=q0OFALSMXkxXhrmk99FEraZWTIHFbiJN&rating=g`)
    .then(resp => resp.json())
    .then( gifdata => {
      this.setState({ gifs: data.gifdata })
    })

  }
  componentDidMount() {
    this.fetchGifs()
  }
}