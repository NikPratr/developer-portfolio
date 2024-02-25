import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div id='nav'>
      <div id='name'>
        <h2 onClick={() => {
          handlePageChange('About');
          window.location.href = '#about';
        }}>Nick Prater</h2>
      </div>
      <ul className="nav-tabs">
        <li
          onClick={() => {
            handlePageChange('About');
            window.location.href = '#about';
          }}
          className="nav-item">
          <a className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>About</a>
        </li>

        {/* <li
          onClick={() => {
            handlePageChange('Portfolio');
            window.location.href = '#portfolio';
          }}
          className="nav-item">
          <a className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</a>
        </li> */}

        <li
          onClick={() => {
            handlePageChange('Resume');
            window.location.href = '#resume';
          }}
          className="nav-item">
          <a className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>
            Resume
          </a>
        </li>

        <li
          onClick={() => { window.location.href = 'mailto:Nicholas.R.Prater@Gmail.com'; }}
          className="nav-item">
          <a>Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default NavTabs;