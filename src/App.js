import './App.css';
import React, { useState } from 'react';
import MoviesList from './movies/MoviesList';
import { Filter } from './Filter'


const App = () => {
  let [searchText, setSearchText] = useState("mang")


  const handleSearchChange = (updatedText) => {
    setSearchText(updatedText)
  }

  return (
    <div className="App">

      <br />
      <Filter handleChange={handleSearchChange} filter={searchText} />
      <MoviesList searchText={searchText} />
    </div>
  );
}

export default App;
