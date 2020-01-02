import React from 'react';
import { PropTypes} from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './RsvpList.css';

const RsvpList = ({ RsvpList }) => {
  const Lists =  RsvpList.map((rsvpItem) => {
    return <div key={rsvpItem} className="rsvp-item">
      <p>Name: {rsvpItem.name}</p>

      <p>Email: {rsvpItem.email}</p>
    </div>
  });

  return (
    <>
      <header style={{ paddingLeft: "10px"}}>
        <Link to="/">Home</Link>
      </header>
  
      <h3 style={{ textAlign: "center"}}>Awesome. So happy to know you'll be coming!</h3>

      <p style={{ textAlign: "center"}}>Here's the party's awesome guest list.</p>

      { Lists }
    </>
  );
};

RsvpList.propTypes = {
  RsvpList: PropTypes.arrayOf(String).isRequired,
}

const mapStateToProps = (state) => {
  return {
    RsvpList: state.rsvp
  }
}

export default connect(mapStateToProps, () => { return {}})(RsvpList);

