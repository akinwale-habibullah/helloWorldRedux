import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Rsvp.css';

const Rsvp = ({ handleSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const formInputUpdateMap = {
    name: setName,
    email: setEmail,
  }

  const onChangeFormInput = (e) => {
    formInputUpdateMap[e.target.name](e.target.value);
  };

  return (
    <>
      <p className="rsvp-header">
        Hey there!
        <span className="p-block">
          You must've gotten my invitation for a special party with friends.
        </span>
        <span className="p-block">
          Please fill this form if you plan to attend. 
        </span>
        
        Looking forward to seeing you. Thank you :-)
      </p>

      <form className="form" onSubmit={handleSubmit}>
        <div className="formInputGroup">
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" value={name} onChange={onChangeFormInput} />
        </div>

        <div className="formInputGroup">
          <label htmlFor="name">Email: </label>
          <input type="text" name="email" value={email} onChange={onChangeFormInput} />
        </div>

        <button type="submit">RSVP</button>
      </form>
    </>
  );
};
Rsvp.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
}

export default Rsvp;
