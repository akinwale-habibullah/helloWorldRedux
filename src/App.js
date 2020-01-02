import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/store';
import './App.css';
import Rsvp from './Rsvp';
import RsvpList from './RsvpList';

function App() {
  return <Provider store={store}>
    <BrowserRouter>
      <Route exact path="/" component={Rsvp} />
      <Route path="/rsvp_list" component={RsvpList} />
    </BrowserRouter>
  </Provider>
}

export default App;
