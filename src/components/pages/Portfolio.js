import React from 'react';
import characterCards from '../../images/character-cards.png';
import socialMedia from '../../images/social-media-project1.png';
import textEditor from '../../images/text-editor-pwa.png';
import ormDemo from '../../images/orm-demonstration.png';
import musicWebsite from '../../images/music-website-image.png'

import Project from '../Project';

export default function Portfolio() {
  return (
    <div>
      <div className='content-body'>
        <div id='portfolio-projects'>
          <Project 
          title='Mock Music Website'
          picture={musicWebsite}
          description="I'm working on a website as a creative and technical exploration. It uses HTML, CSS, Typescript, MySQL, and other tech. It is still a work in progress."
          github={'https://nikpratr.github.io/mock-music-site/'}
          id={1}
          />
          <Project 
          title='Character Cards'
          picture={characterCards}
          description='This is a personal project I worked on toward the end of the bootcamp. It is made using HTML, CSS, and Javascript. It also demonstrates data visualization with chart.js.'
          github={'https://github.com/NikPratr/vessel-cards'}
          id={1}
          />
          <Project
          title='Social Media Demo'
          picture={socialMedia}
          description='This Bootcamp project is a good demonstartion of ORM, RESTful API, and database design. It uses MongoDB, Mongoose, and Express for full CRUD capability.'
          github='https://github.com/NikPratr/mongo-social-network-api'
          id={2}
          />
          <Project
          title='Text Editor PWA'
          picture={textEditor}
          description='This project is a PWA uses service workers, a web app manifest, and data caching strategies.'
          github='https://github.com/NikPratr/text-editor-pwa'
          deployment={'https://blooming-plains-09501.herokuapp.com'}
          id={3}
          />
          <Project
          title='ORM Demo'
          picture={ormDemo}
          description='This is an ORM structure that you may find in an e-commerce site. It uses Sequel DB, class models to create and seed tables, and CRUD operations to manipulate data. The tech used in this project includes dotenv, express, mysql2, and sequelize.'
          github='https://github.com/NikPratr/orm-back-end-demonstration'
          id={4}
          />
        </div>
      </div>
    </div>
  );
}
