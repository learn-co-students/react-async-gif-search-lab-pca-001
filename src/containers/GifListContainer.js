import React, { Component } from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

const {key} = require('../apiKey.js');

class GifListContainer extends Component {

  state = { gifs: [] }

  render() {
    const {fetchGIFs, state} = this;
    return(
      <div>
        <GifSearch fetchGIFs={fetchGIFs} />
        <GifList gifs={state.gifs} />
      </div>
    )
  }

  fetchGIFs = (query) => {
    query = !!query ? query : 'ugh';
    console.log(key)
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${key}&limit=3`)
      .then(res => res.json())
      .then(({data}) => {
        this.setState({gifs: data.map(gif => ({url: gif.images.original.url}))})
      })
  }

  componentDidMount() {
    this.fetchGIFs()
  }
}

export default GifListContainer