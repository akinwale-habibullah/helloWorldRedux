import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './Rsvp.css';

const Rsvp = ({ handleSubmit, history }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const formInputUpdateMap = {
    name: setName,
    email: setEmail,
  }

  const onChangeFormInput = (e) => {
    formInputUpdateMap[e.target.name](e.target.value);
  };
  const onFormSubmit= (e) => {
    e.preventDefault();
    handleSubmit({
      name,
      email
    });
    history.push('/rsvp_list');
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

      <form className="form" onSubmit={onFormSubmit}>
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
};

const RsvpRoute = withRouter(Rsvp);

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (rsvpObj) => {
      dispatch({ type: 'RSVP', payload: rsvpObj})
    }
  }
};

export default connect(() => { return {}}, mapDispatchToProps)(RsvpRoute);
