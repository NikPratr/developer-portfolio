import React from 'react';
import resume from '../resumePDF/resume.pdf'

export default function Resume() {
  const downloadResume = () => {
    var link = document.createElement('a');
    link.href = resume;
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div>
      <div id='resume-container' className='content-body'>
        <button id='resume-button' onClick={downloadResume}>Download Resume</button>

        <h1>Nicholas Prater</h1>
        <br />

        <h6>| 7514 Kingsgate Way, West Chester, OH | (513) 652-0003 | NikPratr@Gmail.com |</h6>
        <br />
        <br />

        <h2>Education</h2>

        <div className='resume-section'>
          <h3>2023</h3>

          <div>
            <h3>Certificate in Full Stack Flex Web Development</h3>

            <h4>Case Western Reserve University, Cleveland, OH</h4>

            <p>Grade: Pass</p>
          </div>
        </div>
        <br />

        <div className='resume-section'>
          <h3>2020</h3>

          <div>
            <h3 style={{ display: 'inline' }}>Bachelor of Science</h3>

            <p style={{ display: 'inline' }}>Psychology, Pre-Med, BNS</p>

            <h4>Wright State University, Dayton, OH</h4>

            <p>GPA: 3.65</p>

            <h5>Honors and Awards:</h5>
            <p>Dean's List: 3 semesters</p>
            <p>Psi Chi: International Honor Society in Psychology</p>

          </div>
        </div>
        <br />

        <h2>Job History</h2>

        <div className='resume-section'>
          <h3>2023 - Present</h3>

          <div>
            <h3>Full Stack Engineer Intern:</h3>
            <h4>Edaptive Computing, Dayton, OH</h4>
            <ul style={{marginTop: 0}}>
              <li>Manages and updates large React applications in CI/CD</li>
              <li>Writes code in Typescript using tech such as Docker, MySQL, NestJS</li>
              <li>Develops products for users and libraries for use by other development teams</li>
              <li>Presents current releases to project owners and customers</li>
            </ul>
          </div>
        </div>
        <br />

        <div className='resume-section'>
          <h3>2022 - 2023</h3>

          <div>
            <h3>Freelance Web Developer:</h3>
            <ul style={{marginTop: 0}}>
              <li>Worked on a variety of web apps employing declarative programming</li>
              <li>Made use of ORMs leveraging languages like Javascript and C#</li>
            </ul>
          </div>
        </div>
        <br />

        <h2>Skills</h2>

        <div className='resume-section'>
          <h3 />

          <div>
            <h5>Front-End Development:</h5>
            <p>Typescript, React, React Router, Axios, Bootstrap, JQuery</p>
            <br />

            <h5>Back-End Development:</h5>
            <p>Node.js, MySQL, Express.js, MongoDB, Mongoose, Sequelize</p>
            <br />

            <h5>Software Development and General Skills:</h5>
            <p>MVC, ORM, OOP, use of Github and Azure for git version control</p>
            <p>Testing and QA tech such as Jest and React Testing Library</p>
            <p>UI/UX prototyping and QA using interfacing tools like Figma</p>
            <p>Resolution of security vulnerabilities guided by OWASP e.g., SQL injection, XSS, etc.</p>
          </div>
        </div>
        <br />
      </div>
    </div>
  );
}
