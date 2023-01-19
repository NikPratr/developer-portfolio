import React, { useState, useEffect } from 'react';

// /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/

export default function Contact() {
  const [formObject, setFormObject] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [alertText, setAlertText] = useState('');

  const handleFormSubmit = () => {
    alert('You submited a form');
  };

  const handleInput = (event) => {
    const { name, value } = event.target;
    setFormObject(formObject => ({
      formObject,
      [name]: value
    }));
  };

  const updateAlert = (event) => {
    if(event.target.value.length === 0) {
      setAlertText(event.target.name + ' is required');
    } else if (event.target.value.search(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/)) {
      setAlertText('The email you entered is invalid')
    }
  };

  return (
    <div>
      <form className='content-body' onSubmit={handleFormSubmit}>
        <label for='Name'>Name:</label>
        <br />
        <input
          type='name'
          id='name-input'
          name='Name'
          onChange={handleInput}
          onBlur={updateAlert}>
        </input>

        <br />
        <br />

        <label for='Email'>Email:</label>
        <br />
        <input
          type='email'
          id='email-input'
          name='Email'
          onChange={handleInput}
          onBlur={updateAlert}>
        </input>

        <br />
        <br />

        <label for='Message'>Message:</label>
        <br />
        <textarea
          type='message'
          id='message-input'
          name='Message'
          onChange={handleInput}
          onBlur={updateAlert}>
        </textarea>

        <p id='alert'>{alertText}</p>


        <button type='submit' id='submit-button'>Submit</button>
      </form>
    </div>
  );
}
