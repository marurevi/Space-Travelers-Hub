import fetchRockets from '../../helpers/API_rockets';
// Actions
const SHOW_ROCKETS = 'rockets/SHOW_ROCKETS';

// Action Creators
const getRockets = () => async (dispatch) => {
  const rockets = await fetchRockets();
  dispatch({ type: SHOW_ROCKETS, payload: rockets });
};

// Reducer
const initialState = [];
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SHOW_ROCKETS:
      return action.payload;
    default:
      return state;
  }
}

export { getRockets };
