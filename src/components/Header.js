import React from 'react';
import profile from '../images/nick.png'

const Header = ({ title, picture }) => {
  return (
    <header className='content-title'>
      <h1>{title}</h1>
      {picture === true ?
      <img className='header-image' src={profile}></img> :
      ''}
    </header>
  )
}

export default Header;