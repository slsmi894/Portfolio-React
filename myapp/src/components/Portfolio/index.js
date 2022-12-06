// import logo from './logo.svg';
import React,{ useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from '../Navigation';
import Home from '../pages/Home';
import About from '../pages/About';
import WorkInfo from '../pages/WorkInfo';
import Contact from '../pages/Contact';
import Resume from '../pages/Resume';




// import './App.css';

function Portfolio() {


  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Work') {
      return <WorkInfo />;
    }  
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div style={{ backgroundColor: '#ffffff', maxHeight: '1000vh' }} className="App" id='home' >
    
      {/* We are passing the currentPage from state and the function to update it */}
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>

  );
}


export default Portfolio;