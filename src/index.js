import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import StateExplore from './App';
import apicopy from './apicopy';
import Box from './box';
import {useEffect} from 'react';
// import {Fraction} from 'fractional';
import numeral from 'numeral';

// import Display from './App';
// import reportWebVitals from './reportWebVitals';

// Understanding state nad props dynamics

// meme generator
function Header() {
  const [number, addNo] = useState([]);
  function sum() {
    addNo(prev => [...prev, prev.length + 1]);
  }
  const individualItem = number.map(it => <p>{it}</p>);

  return (
    <div className="container">
      <nav className="nav">Meme Generator</nav>
      <div className="form">
        <input className="form--input" type="text" />
        <input className="form--input" type="text" />

        <button onClick={sum}>Add</button>
      </div>
      <p>{individualItem}</p>
    </div>
  );
}
function PropsState() {
  const api = apicopy;
  return (
    <>
      <div>
        {api.map(api => (
          <StateExplore key={api.age} id={api.id} />
        ))}
      </div>
    </>
  );
}
function PropsCol() {
  const api = apicopy;
  return (
    <>
      {api.map(col => (
        <Box
          key={col.id}
          id={() => console.log(col.age)}
          color={col.color}
          on={col.on}
          cl={() => console.log('hi')}
        />
      ))}
    </>
  );
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
<>
  {/* <div>{alert(`click on the boxes to see the magic`)}</div> */}
  <PropsCol />
</>;
// );
// root.render(<PropsState />);
// root.render(<Header />);

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

  
 
}


  */

//  practicing advanced forms
function Forms() {
  const [forms, setForms] = useState({firstName: '', lastName: ''});

  console.log(forms);
  function handleForm(e) {
    setForms(prev => {
      return {...prev, [e.target.name]: e.target.value};
    });
  }

  return (
    <form className="m-5">
      <input
        type="text"
        placeholder="first name"
        name="firstName"
        onChange={handleForm}
      />
      <input
        type="text"
        placeholder="last name"
        name="lastName"
        onChange={handleForm}
      />
    </form>
  );
}

// practicing out my first react project

function Api() {
  const [api, setApi] = useState(null);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/region/europe')
      .then(res => res.json())
      .then(data => {
        const area = data.filter(country => country.area >= 30000);
        console.log(area);
        setApi(area);
      });
  }, []);

  return (
    <div className="container">
      {api && (
        <div className="row">
          <h1 className="h2 fw-bold text-center mx-auto">
            LIST OF EUROPE COUNTRIES WITH LARGE AREA SIZE
          </h1>

          {api.map(api => {
            console.log(api);
            return (
              <div className="col-4 my-5" key={api.capital[0]}>
                <img
                  src={api.flags.png}
                  alt={api.flags.alt}
                  style={{width: '90%', height: '40%'}}
                />
                <h1 className="h3 fw-bold my-4">{api.name.common}</h1>
                <p>
                  Population:
                  <span className="fw-bold h5">
                    {numeral(api.population).format('0,0')}
                  </span>{' '}
                  people
                </p>
                <p>
                  Land Size:{' '}
                  <span className="fw-bold h5">
                    {numeral(api.area).format('0,0')}
                  </span>{' '}
                  sq km
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Api />);
