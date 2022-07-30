// import logo from './logo.svg';
import React from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
import hat from './assets/images/hat.jpeg';


import './App.css';

function App() {
  const opacStyle = { opacity: '0.3', borderColor: 'rgb(248,248,255, 0.1)', borderRadius: '10%', minHeight: '400px', display: 'flex', justifyContent: 'flex-end', marginLeft: '50px' }



  return (
    <div className="App">
      <Nav />
      <Header />





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

      <main>
        <img alt='sandy with hat' src={hat} style={opacStyle} />

      </main>
    </div>
  );
}

export default App;
