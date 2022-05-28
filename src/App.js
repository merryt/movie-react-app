import './App.css';
import React, { PropTypes, useState } from 'react';
import MoviesList from './MoviesList';
import { Search } from './Search'


const App = () => {


  let [searchText, setSearchText] = useState("")
  const handleSearchChange = (updatedText) => {
    setSearchText(updatedText)
  }

  return (
    <div className="App">

      <br />
      <Search handleChange={handleSearchChange} />
      <MoviesList searchText={searchText} />
    </div>
  );
}

export default App;
