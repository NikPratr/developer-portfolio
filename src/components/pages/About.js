import React from 'react';
import picture from '../../images/nick-full.jpg';

export default function About() {
  return (
    <div>
      <div className='content-body'>
        <p>Hey there. I'm a full stack engineer working at Edaptive Computing Inc. I have a background in psychology, and am certified in full stack web development by Case Western Reserve Uninversity. In 2022 and 2023 I spent a lot of time working on projects as freelance web developer. During that time, I made a variety of responsive web apps that are both fun to look at and intuitive to use. Currently, I am working at Edaptive Computing Inc., where I write and manage large React applications for use by customers and libraries for use by other development teams. The tech I'm working most closely with includes React, Typescript, MySQL, and NestJS, but I have worked on others, mentioned below. As a full stack engineer, I keep up to date on tech both front end and back end, and am always looking for ways to improve my skills.</p>  
      </div>

      <div className='content-body'>
        <h3 className='content-subheader'>Skills</h3>

        <div className='skills-container'>
          <div className='skill'>
            <h4>Front-End</h4>
            <p>HTML</p>
            <p>CSS</p>
            <p>Javascript</p>
            <p>Bootstrap</p>
            <p>JQuery</p>
            <p>Ajax</p>
            <p>React</p>
            <p>React Router</p>
            <p>Axios</p>
          </div>

          <div className='skill'>
            <h4>Back-End</h4>
            <p>Node.js</p>
            <p>Express.js</p>
            <p>Docker</p>
            <p>MySQL</p>
            <p>MongoDB</p>
            <p>Mongoose</p>
            <p>Sequelize</p>
          </div>

          <div className='skill'>
            <h4>General Skills</h4>
            <p>MVC, ORM, OOP, use of Github and Azure for git version control</p>
            <p>Testing and QA tech such as Jest and React Testing Library</p>
            <p>UI/UX prototyping and QA using interfacing tools like Figma</p>
            <p>Resolution of security vulnerabilities guided by OWASP e.g., SQL injection, XSS, etc.</p>
          </div>
        </div>
      </div>

      <div className='content-body'>
        <div style={{width: '100%'}}>
          <h5 style={{display: 'inline'}}>Email: </h5>
          <a href='mailto:Nicholas.R.Prater@Gmail.com'>Nicholas.R.Prater@Gmail.com</a>
        </div>
        
        <div>
          <h5 style={{display: 'inline'}}>Github: </h5>
          <a style={{textDecoration: 'underline', textUnderlineOffset: '2px', fontWeight: 'unset'}} href='https://www.github.com/nikpratr'>NikPratr</a>
        </div>

        <div>
          <h5 style={{display: 'inline'}}>Linkedin: </h5>
          <a style={{textDecoration: 'underline', textUnderlineOffset: '2px', fontWeight: 'unset'}} href='https://www.linkedin.com/in/nick-prater-62b38b246'>Nicholas Prater</a>
        </div>
      </div>
    </div>
  );
}
