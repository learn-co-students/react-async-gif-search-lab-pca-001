import React from 'react'

import NavBar from './NavBar'
import GifListContainer from '../containers/GifListContainer'

// the App component should render out the GifListContainer component

const App = () => {
  return (
    <div>
        <NavBar color='black' title="Giphy Search" />
        <GifListContainer />
    </div>
  )
}

export default App

// APIKey: jTz3tzORou7OjlN5AkNo62KdhTppYc1G
// URL: https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=jTz3tzORou7OjlN5AkNo62KdhTppYc1G&rating=g

