// import logo from './logo.svg';
import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header>
        <h1>From App Js!</h1>
        <Nav />

        {/* <img src={logo} className="App-logo" alt="logo" />
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
        </a> */}
      </Header>
      <main>

      </main>
    </div>
  );
}

export default App;
