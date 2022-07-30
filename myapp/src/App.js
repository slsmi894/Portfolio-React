// import logo from './logo.svg';
import React from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
import About from './components/About';
import hat from './assets/images/hat.jpeg';


import './App.css';

function App() {
  const opacStyle = { opacity: '0.3', borderColor: 'rgb(248,248,255, 0.1)', borderRadius: '10%', minHeight: '400px', display: 'flex', justifyContent: 'flex-end', marginLeft: '50px' }



  return (
    <div className="App">
      <Nav />
      <Header />



      <main style={{ maxWidth: '88%'}}>
        <div>
           <img alt='sandy with hat' src={hat} style={opacStyle} />
        </div>
     
        <About />
          
       

      </main>
    </div>
  );
}

export default App;
