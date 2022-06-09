import './App.css';
import React, { useState } from 'react';
import MoviesList from './movies/MoviesList';
import { Filter } from './Filter'
import { ShowCount } from './ShowCount'


const App = () => {
  let [searchText, setSearchText] = useState("")
  let [count, setCount] = useState("20")


  const handleSearchChange = (updatedText) => {
    setSearchText(updatedText)
  }

  const handleCountChange = (updatedCount) => {
    setCount(updatedCount)
  }


  return (
    <div className="App">
      {count}
      <br />
      <Filter handleChange={handleSearchChange} filter={searchText} />
      <ShowCount handleChange={handleCountChange} count={count} />
      <MoviesList searchText={searchText} count={count} />
    </div>
  );
}

export default App;
