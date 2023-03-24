import React, { useState, useEffect } from 'react';

export default function Contact() {
  const [formObject, setFormObject] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [alertText, setAlertText] = useState('');

  const handleFormSubmit = () => {
    updateAlert;

    if (name.length > 0 && email.length > 0 && message.length > 0 && emailRegex.test(email)) {
      
    }
  };

  // Outdated handleInput 
  // const handleInput = (event) => {
  //   const { name, value } = event.target;
  //   setFormObject(formObject => ({
  //     formObject,
  //     [name]: value
  //   }));
  // };

  const handleInput = (event) => {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  };

  const updateAlert = () => {
    const button = document.getElementById('submit-button');
    const formContainers = document.querySelectorAll('.form-container');
    const messageContainer = document.querySelector('#message-form-container');

    if(name === '' || email === '' || message === '') {
      button.style.marginTop = '32px';
      name === '' ? formContainers[0].style.border = '2px rgba(255, 0, 0, 0.75) solid' : formContainers[0].style.border = 'none';
      email === '' ? formContainers[1].style.border = '2px rgba(255, 0, 0, 0.75) solid' : formContainers[1].style.border = 'none';
      message === '' ? messageContainer.style.border = '2px rgba(255, 0, 0, 0.75) solid' : messageContainer.style.border = 'none';
      
      setAlertText("It looks like you're missing some information!");
    } else if (emailRegex.test(email)) {
      button.style.marginTop = '32px';
      formContainers[0].style.border = 'none';
      formContainers[1].style.border = '2px rgba(255, 0, 0, 0.75) solid';
      messageContainer.style.border = 'none';

      setAlertText('You may want to check that email');
    } else {
      setAlertText('');
      button.style.marginTop = '50px';
    }
  };

  const emailRegex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
  const { name, email, message } = formObject;

  return (
    <div>
      <form className='content-body' onSubmit={handleFormSubmit}>

        <div className='form-container'>
          <label for='Name'>Name:</label>

          <input
            type='name'
            id='name-input'
            name='name'
            onChange={handleInput}>
          </input>
        </div>

        <div className='form-container'>
          <label for='Email'>Email:</label>

          <input
            type='email'
            id='email-input'
            name='email'
            onChange={handleInput}>
          </input>
        </div>

        <div id='form-message-container'>
          <label id='message-label' for='Message'>Message:</label>

          <textarea
            id='message-input'
            type='message'
            name='message'
            onChange={handleInput}>
          </textarea>
        </div>

        <div id='alert'>{alertText}</div>


        <button type='submit' id='submit-button' onClick={handleFormSubmit}>Submit</button>
      </form>
    </div>
  );
}
