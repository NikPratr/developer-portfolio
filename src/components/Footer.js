import React from 'react';
import github from '../images/github.png';
import linkedin from '../images/linkedin.png';
import nick from '../images/nick.png';

const Footer = () => {
    return (
        <footer id='footer'>
            <a href="https://www.github.com/nikpratr" target={'_blank'}>
                <img id='github' src={github}></img>
            </a>
            <img id='profile-picture' src={nick}></img>
            <a href="https://www.linkedin.com/in/nick-prater-62b38b246/" target={'_blank'}>
                <img id='linkedin' src={linkedin}></img>
            </a>
        </footer>
    )
}

export default Footer;