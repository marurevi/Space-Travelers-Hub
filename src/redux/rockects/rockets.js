import fetchRockets from '../helpers/API_rockets';
// Actions
const SHOW_ROCKETS = 'rockets/SHOW_ROCKETS';

// Reducer
const initialState = [];
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_ROCKETS:
      return action.payload;
    default:
      return state;
  }
}

// Action Creators
const getRockets = () => async (dispatch) => {
  const rockets = await fetchRockets();
  dispatch({ type: SHOW_ROCKETS, rockets });
};

export { getRockets };
