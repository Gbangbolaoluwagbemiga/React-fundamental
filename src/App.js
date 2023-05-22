import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function Display(api) {
  return (
    <div className="overall col-md-5 ms-md-5">
      <img
        src={logo}
        className="logo ms-5"
        alt="logo"
        width="150px"
        height="150px"
      />
      <h1 className="h2 fw-bold">Fun facts about react</h1>
      <ul className="justify-content-center ">
        <li>{api.name}</li>
        <li>{api.gender}</li>
        <li>{api.age}</li>
        {api.gender && ( //peradventure gender doesn't exist, it doesn't get added.
          <li>
            my name is {api.name}, i am a {api.gender}.I am {api.age}
          </li>
        )}
      </ul>
    </div>
  );
}

function StateExplore(props) {
  return (
    <>
      <h1>HI</h1>
      <p>{props.id}</p>
    </>
  );
}

export default StateExplore;
// export default App;
