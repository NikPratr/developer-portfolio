import React, { useState } from 'react';

import NavTabs from './NavTabs';
import Header from './Header';
import Footer from './Footer';

import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Resume') {
      return (
        <div>
          <Header
          title={currentPage}
          picture={false}/>
          <Resume />
          <Footer />
        </div>
      )
    }
    if (currentPage === 'Contact') {
      return (
        <div>
          <Header
          title={currentPage + ' Me'}
          picture={false}/>
          <Contact />
          <Footer />
        </div>
      )
    }
    if (currentPage === 'Portfolio') {
      return (
        <div>
          <Header
          title={currentPage}
          picture={false}/>
          <Portfolio />
          <Footer />
        </div>
      )
    }
    return (
      <div>
        <Header
        title={currentPage + ' Me'}
        picture={true}/>
        <About />
        <Footer />
      </div>
    )
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}