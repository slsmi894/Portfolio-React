// import logo from './logo.svg';
import React from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
import About from './components/About';
// import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';
import hat from './assets/images/hat.jpeg';


import './App.css';

function App() {
  const opacStyle = { opacity: '0.3', borderColor: 'rgb(248,248,255, 0.1)', borderRadius: '10%', minHeight: '400px', display: 'flex', justifyContent: 'flex-end', marginLeft: '50px' }



  return (
    <div className="App" id='home'>
      <Nav />
      <Header />



      <main style={{ maxWidth: '88%'}}>
        <div>
           <img alt='sandy with hat' src={hat} style={opacStyle} />
        </div>
     
        <About id='about'/>
        {/* <Work id='work' /> */}
        <Contact id='contact' />
          
       

      </main>
      <Footer />
    </div>

  );
}

export default App;
