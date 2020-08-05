import React from "react";
import GifListContainer from "../containers/GifListContainer";
import NavBar from "./NavBar";

// Tried to use https://www.npmjs.com/package/react-giphy-searchbox but I think there was
// an issue with the versions

const App = () => {
  return (
    <div>
      <NavBar color="black" title="Giphy Search" />
      <GifListContainer />
    </div>
  );
};

export default App;
