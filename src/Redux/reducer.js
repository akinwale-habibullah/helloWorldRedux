import actions from './actions';

const reducer = (state = {
  rsvp: []
}, action) => {
  switch (action.type) {
    case actions.RSVP:
      return Object.assign({}, state, {
        rsvp: state.rsvp.concat(action.payload)
      });
  
    default:
      return state;
  };
};

export default reducer;
