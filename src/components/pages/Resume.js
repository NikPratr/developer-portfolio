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

        <h2>Summary</h2>
        <br />

        <p>
          Full Stack Flex Web Developer combining an extensive background in psychology with a passion for coding and software development; uses those skills to create a seamless communicative connection between intuitive and eye-catching webpages and efficient server-side data structures. Spent 5 years at Wright State University while working on and off campus and doing volunteer-work to earn a bachelor’s in psychology. Worked through pre-med program and developed a strong work ethic, good communication skills and problem-solving abilities. Achieved several deans’ listings and earned a spot in Psi Chi, the national honors association in psychology. Afterward, decided to pursue a degree at Case Western Reserve University in coding to develop skills in HTML, CSS, Javascript, and many associated runtimes, extensions, and libraries. Known as a creative problem-solver a dedicated and detail-oriented worker excited to take on new professional projects.
        </p>
        <br />

        <p style={{textIndent: '0px'}}>Github: <a href='https://github.com/NikPratr'>https://github.com/NikPratr</a></p>
        <p style={{textIndent: '0px'}}>LinkIn: <a href='https://www.linkedin.com/in/nick-prater-62b38b246'>https://www.linkedin.com/in/nick-prater-62b38b246</a></p>
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

        <h2>Skills</h2>

        <div className='resume-section'>
          <h3 />

          <div>
            <h5>Front-End Development:</h5>
            <p>HTML, CSS, Javascript, Bootstrap, JQuery, Ajax, React, React Router Axios</p>
            <br />

            <h5>Back-End Development:</h5>
            <p>Node.js, Express.js, MySQL, Sequelize, MongoDB, Mongoose</p>
            <br />

            <h5>Software Development and General Skills:</h5>
            <p>MVC, ORM, OOP, Git Version Control, Advanced Use of Google keywords, Use of AI Search Engines e.g., ChatGPT</p>
          </div>
        </div>
        <br />

        <h2>Projects</h2>

        <div className='resume-section'>
          <h3 />

          <div>
            <h5>Character Cards:</h5>
            <p>This is a personal project I worked on toward the end of my coding bootcamp. It is made using HTML, CSS, and Javascript, and demonstrates data visualization using chart.js.</p>
            <p>Github: <a href='https://github.com/NikPratr/vessel-cards' target={'_blank'}>https://github.com/NikPratr/vessel-cards</a></p>
          </div>
        </div>
        <br />

        <div className='resume-section'>
          <h3 />

          <div>
            <h5>Text Editor PWA:</h5>
            <p>This PWA uses service workers, a web app manifest, and data caching strategies.</p>
            <p>Github: <a href='https://github.com/NikPratr/text-editor-pwa' target={'_blank'}>https://github.com/NikPratr/text-editor-pwa</a></p>
            <p>Deployment: <a href='https://blooming-plains-09501.herokuapp.com' target={'_blank'}>https://blooming-plains-09501.herokuapp.com</a></p>
          </div>
        </div>
        <br />

        <div className='resume-section'>
          <h3 />

          <div>
            <h5>BB Plaza:</h5>
            <p>This is a social media site built around sharing artistic projects. It is currently being worked on, but I worked on the home page, and am quite proud of the design.</p>
            <p>Github: <a href='https://github.com/DVidal1209/art-museum' target={'_blank'}>https://github.com/DVidal1209/art-museum</a></p>
            <p>Deployment: <a href='https://protected-shore-90563.herokuapp.com' target={'_blank'}>https://protected-shore-90563.herokuapp.com</a></p>
          </div>
        </div>
        <br />

        <div className='resume-section'>
          <h3 />

          <div>
            <h5>Social Media Demo:</h5>
            <p>This is a bootcamp project I worked on and is a good demonstration of ORM, RESTful API, and database design. It uses MongoDB, Mongoose, and Express for full CRUD operability. Currently, it must be operated from insomnia.</p>
            <p>Github: <a href='https://github.com/NikPratr/mongo-social-network-api' target={'_blank'}>https://github.com/NikPratr/mongo-social-network-api</a></p>
          </div>
        </div>
        <br />

        <h2>Job History</h2>

        <div className='resume-section'>
          <h3>2023 - Present</h3>

          <div>
            <h3>Freelance Software Developer:</h3>
            <h4>West Chester, OH</h4>
            <p>Taking on projects for others to further my technical skills while searching for full-time work</p>
          </div>
        </div>
        <br />

        <div className='resume-section'>
          <h3>2021 - Present</h3>

          <div>
            <h3>Courier:</h3>
            <h4>FedEx, Loveland, OH</h4>
            <p>Handled and delivered incoming and outgoing documents and packages as well as courier clerical duties</p>
          </div>
        </div>
        <br />

        <div className='resume-section'>
          <h3>2020</h3>

          <div>
            <h3>Wright State Tutoring Services</h3>
            <h4>Wright State University, Dayton, OH</h4>
            <p>Tutored multiple classes such as organic chemistry as well as anatomy and physiology</p>
            <p>Guided students toward strong study habits, better time management, and productive routines needed to be successful in various classes</p>
          </div>
        </div>
        <br />

        <div className='resume-section'>
          <h3>2019-2021</h3>

          <div>
            <h3>Medical Scribe</h3>
            <h4>Scribe America - Cincinnati Children's Hospital Medical Center, and satellite locations, OH</h4>
            <p>Worked alongside doctors and nurse practitioners transcribing patient charts on their behalf</p>
            <p>Interacted with medical staff and participated in non-direct patient care
            </p>
            <p>Gained experience with workflow and day-to-day responsibilities entailed by working in various medical settings</p>
          </div>
        </div>
        <br />

        <div className='resume-section'>
          <h3>2017-2018</h3>

          <div>
            <h3>Undergraduate Research Assistant</h3>
            <h4>Wright Patterson Airforce Research Laboratory, Dayton, OH</h4>
            <p>Participated in psychological research studies under Dr. Brian Simpson, testing equipment for various military, industrial and occupational use</p>
            <p>Collaborated with professionals from varying psychological disciplines</p>
          </div>
        </div>
        <br />

        <div className='resume-section'>
          <h3>2015-2019</h3>

          <div>
            <h3>Delivery Driver</h3>
            <h4>Pizza Hut, West Chester, OH</h4>
            <p>Prepared and delivered pizza and other food products. Worked at the register and engaged in storefront maintenance</p>
          </div>
        </div>
        <br />

        <h2>Volunteer Work</h2>

        <div className='resume-section'>
          <h3 />

          <div>
            <h3>Wright State Psychology Club Secretary</h3>
            <p>Maintained weekly office hours to communicate meetings with the club’s members and volunteers</p>
            <p>Planned and helped to set up psychology club events and fund-raising stands throughout campus as well as participated in fund raising and event management</p>
          </div>
        </div>
        <br />

        <div className='resume-section'>
          <h3 />

          <div>
            <h3>Wright State Student Engagement Mentoring Program</h3>
            <p>During my senior year I mentored first year students helping them to be properly acclimated to their new surroundings, guided them with my experience as an undergraduate and helped foster a positive and productive mindset</p>
          </div>
        </div>
        <br />

        <div className='resume-section'>
          <h3 />

          <div>
            <h3>Oxford Seniors Meals On Wheels Driver</h3>
            <p>Volunteered for Oxford Seniors’ Home-Delivered Meals service, which provides daily cold and hot meals to the elderly and disabled</p>
          </div>
        </div>
        <br />
      </div>
    </div>
  );
}
