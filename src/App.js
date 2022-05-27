import './App.css';
import React, { PropTypes } from 'react';
import Counter from './Counter';
import { Accordian } from './Accordian';
import ControlledInput from './ControlledInput';


const Intro = ({ user = { name: "guy" } }) => {

  return (
    <div>Navigation, welcome back {user.name}</div>
  )
}


const App = () => {

  const user = {
    name: "tyler",
    email: "test@test.com"
  }

  let intro = <h1>this is an example of html as a variable</h1>

  return (
    <div className="App">
      <header className="App-header">
        {intro}
        <Intro user={user} />
        <Intro />
        <p>hi</p>
        <Counter />
        <Accordian />
        <ControlledInput />
      </header>
    </div>
  );
}

export default App;
