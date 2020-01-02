import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Rsvp from './Rsvp';

const RsvpWrapper = () => {
  return <Rsvp handleSubmit={(rsvpObject) => {
    console.log(rsvpObject);
  }} />
}

function App() {
  return <BrowserRouter>
    <Route path="/" component={RsvpWrapper} />
  </BrowserRouter>
}

export default App;
