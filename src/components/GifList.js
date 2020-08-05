import React, { Component } from 'react'

export default class GiftList extends Component {
  render(){
    return(
      <ul>
        {this.props.gifs.map(gif => <li><img src={gif.images.original.url} /></li>)}
      </ul>
    )
  }
}
