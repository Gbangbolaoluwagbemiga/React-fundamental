import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Display from './App';
// import reportWebVitals from './reportWebVitals';

// meme generator
function Header() {
  return (
    <div className="container">
      <nav className="nav">Meme Generator</nav>
      <div className="form">
        <input className="form--input" type="text" />
        <input className="form--input" type="text" />
        <button>Add</button>
      </div>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header />);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
// reportWebVitals();

// Praticing react
/*
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">Disabled</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

function BodyContent() {
  return <p className="h3 mt-5">I'm learning React</p>;
}
const trying = ReactDOM.createRoot(document.getElementById('root'));
trying.render(
  <div>
    <Navbar />
    <BodyContent />
  </div>
);
// trying.render(<p>Trial</p>);

// ASSESSMENT 1
// practicing map in react
import logo from './logo.svg';
import apicopy from './apicopy.js';

function Ass1() {
  // function Ass1({name, gender, done}) {
  const Apicopy = apicopy.map(api => {
    return (
      <Display
        key={api.name}
        name={api.name}
        gender={api.gender}
        age={api.age}
      />
    );
  });
  return Apicopy;
  // return (
  //   <div className="overall col-md-5 ms-5">
  //     <img
  //       src={logo}
  //       className="logo ms-5"
  //       alt="logo"
  //       width="150px"
  //       height="150px"
  //     />
  //     <h1 className="h2 fw-bold">Fun facts about react</h1>
  //     <ul className="justify-content-center ">
  //       <li>Hey</li>
  //       <li>Hi</li>
  //       <li>Hello</li>
  //       <li>
  //         my name is {name}, i am a {gender}. {done}
  //       </li>
  //     </ul>
  //   </div>
  // );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="row container">
    <Ass1 />
  </div>
);

// Practicing state
function StatePractice() {
  const [number, changeNumber] = useState(0);
  function addNo() {
    // changeNumber(number + 1);
    changeNumber(nxt => nxt + 1);
  }
  function subtractNo() {
    // changeNumber(number - 1);
    changeNumber(prev => prev - 1);
  }
  return (
    <div className="container">
      <div className="display"> {number} </div>
      <div className="add" onClick={addNo}>
        +
      </div>
      <div className="add" onClick={subtractNo}>
        -
      </div>
    </div>
  );

  
  const [number, addNo] = useState([1]);
  function sum() {
    addNo(prev => [...prev, prev.length + 1]);
  }
  const individualItem = number.map(it => <p>{it}</p>);
  <p>{individualItem}</p>;
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<StatePractice />);


  */
