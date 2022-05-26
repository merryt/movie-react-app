import './App.css';


const Intro = ({ user = { name: "guy" } }) => {

  return (
    <div>navigation, welcome back {user.name}</div>
  )
}


const App = () => {
  const user = {
    name: "tyler",
    email: "test@test.com"
  }
  return (
    <div className="App">
      <header className="App-header">
        <Intro user={user} />
        <Intro />
        <p>hi</p>
      </header>
    </div>
  );
}

export default App;
