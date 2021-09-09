import React, { useState } from 'react';
import Button from './button';

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    textarea: '',
  });
  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&');
  }

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...formState }),
    })
      .then(() => alert('Success!'))
      .catch((error) => alert(error));

    e.preventDefault();
  };
  return (
    <div>
      <form
        className='form'
        onSubmit={handleSubmit}
        name='contact'
        method='POST'
        data-netlify='true'
      >
        <input type='hidden' name="'contact" value='contact' />
        <p>
          <label>
            Name{' '}
            <input
              onChange={handleChange}
              value={formState.name}
              type='text'
              name='name'
            />
          </label>
        </p>
        <p>
          <label>
            Email:{' '}
            <input
              onChange={handleChange}
              value={formState.email}
              type='email'
              name='email'
            />
          </label>
        </p>

        <p>
          <label>
            Message:{' '}
            <textarea
              onChange={handleChange}
              value={formState.textarea}
              name='textarea'
            ></textarea>
          </label>
        </p>

        <button type='submit'>
          <Button buttonContent={''} buttonClass={'buttonFeatured'} />{' '}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
