import React from 'react';
import one from '../../images/image-1.png';
import two from '../../images/image-2.png';
import three from '../../images/image-3.png';
import four from '../../images/image-4.png';

export default function Portfolio() {
  return (
    <div>
      <p className='content-body'>
        Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
        Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
        mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
        lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
        imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
        in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
      </p>

      <div className='content-body'>
        <div id='portfolio-projects'>
          <div className='project-container'>
            <img
              onClick={() => alert("Links to a project 1")}
              className='project-image' src={one}></img>
            <h3 className='project-title-inside'>Project 1</h3>
            <h3 className='project-title-outside'>Project 1</h3>
          </div>

          <div
            onClick={() => alert("Links to a project 2")}
            className='project-container'>
            <img className='project-image' src={two}></img>
            <h3 className='project-title-inside'>Project 2</h3>
            <h3 className='project-title-outside'>Project 2</h3>
          </div>

          <div
            onClick={() => alert("Links to a project 3")}
            className='project-container'>
            <img className='project-image' src={three}></img>
            <h3 className='project-title-inside'>Project 3</h3>
            <h3 className='project-title-outside'>Project 3</h3>
          </div>

          <div
            onClick={() => alert("Links to a project 4")}
            className='project-container'>
            <img className='project-image' src={four}></img>
            <h3 className='project-title-inside'>Project 4</h3>
            <h3 className='project-title-outside'>Project 4</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
