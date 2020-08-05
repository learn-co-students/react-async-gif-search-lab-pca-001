import React, { Component } from 'react';

class GifSearch extends Component {

  state = { query: "" }

  handleSubmit = event => {
    const { props, state }  = this;
    event.preventDefault();
    props.fetchGIFs(state.query);
  }

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

export default GifSearch;