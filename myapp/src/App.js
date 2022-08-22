// import logo from './logo.svg';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
// import Header from './components/Header';
import About from './components/About';
import Home from './components/Home';
import WorkInfo from './components/WorkInfo';
import Contact from './components/Contact';
import Footer from './components/Footer';




import './App.css';

function App() {



  return (
    <div style={{ backgroundColor: '#ffffff', maxHeight: '600vh' }} className="App" id='home' >
      <Navigation fixed="top" />


      <div>
        <Home />
      </div>

      <main style={{ maxWidth: '88%', marginTop: '20px' }}>

        <About id='about' />
        {/* <Work id='work' /> */}

        <WorkInfo />
        <Contact id='contact' />

      </main>
      <Footer />
    </div>

  );
}

export default App;
