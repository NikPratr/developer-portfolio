import React from 'react';
import picture from '../../images/nick-full.jpg';

export default function About() {
  return (
    <div>
      <div className='content-body'>
        {/* <img id='bio-pic' src={picture}/> */}
        <p>Full Stack Flex Web Developer combining an extensive background in psychology with a passion for coding and software development; uses those skills to create a seamless communicative connection between intuitive and eye-catching webpages and efficient server-side data structures. Spent 5 years at Wright State University while working on and off campus and doing volunteer-work to earn a bachelor’s in psychology. Worked through pre-med program and developed a strong work ethic, good communication skills and problem-solving abilities. Achieved several deans’ listings and earned a spot in Psi Chi, the national honors association in psychology. Afterward, decided to pursue a degree at Case Western Reserve University in coding to develop skills in HTML, CSS, Javascript, and many associated runtimes, extensions, and libraries. Known as a creative problem-solver a dedicated and detail-oriented worker excited to take on new professional projects.</p>

        {/* <p>In 2020, I graduated from Wright State University with a Bachelor of Science. I majored in Psychology with a specialization in Behavioral Neuroscience. I planned on attending medical school, but as I got closer to it, began working more closely with doctors and the medical staff, and got a better feel for what my day-to-day life would be like as a doctor, I began to feel like it may not be the right path for me.</p>
        <br />

        <p>In 2023, I receieved a certificate in Full Stack Flex Web Development. I am still new, but I'm very happy that I made the change. I really enjoy UI/UX work and front end development but, as a full stack developer, I am comfortable with back end development as well.</p>
        <br />
        
        <p>Today, I am working at Fedex as a courier while doing freelance coding in my free time. I am heavily involved in creative projects outside of coding; I am playing the piano and working on a creative writing project, but my biggest focus currently is the coding projects left over from the bootcamp, development projects for other people, and of course my own personal coding projects, some of which can be found in my portfolio section!</p> */}
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
            <p>MySQL</p>
            <p>Sequelize</p>
            <p>MongoDB</p>
            <p>Mongoose</p>
          </div>

          <div className='skill'>
            <h4>General Skills</h4>
            <p>MVC</p>
            <p>ORM</p>
            <p>OOP</p>
            <p>Git Version Control</p>
            <p>Advanced use of Google keywords for search</p>
            <p>Use of AI search engines e.g., ChatGPT</p>
          </div>
        </div>
      </div>

      <div className='content-body'>
        <div style={{width: '100%'}}>
          <h5 style={{display: 'inline'}}>Email: </h5>
          <a href='mailto:NikPratr@Gmail.com'>NikPratr@Gmail.com</a>
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
