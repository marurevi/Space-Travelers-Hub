import fetchRockets from '../../helpers/API_rockets';
// Actions
const SHOW_ROCKETS = 'rockets/SHOW_ROCKETS';
const BOOK_ROCKET = 'rockets/BOOK_ROCKET';

// Action Creators
const getRockets = async (dispatch, getState) => {
  const { rockets: currentRockets } = getState();
  if (currentRockets.length === 0) {
    const rockets = await fetchRockets();
    dispatch({ type: SHOW_ROCKETS, payload: rockets });
  }
};

const bookRockets = (id) => ({
  type: BOOK_ROCKET,
  payload: id,
});

// Reducer
const initialState = [];
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SHOW_ROCKETS:
      return action.payload;
    case BOOK_ROCKET:
      return state.map((rocket) => {
        if (rocket.id !== action.payload) {
          return rocket;
        }
        return { ...rocket, reserved: !rocket.reserved };
      });
    default:
      return state;
  }
}

export { getRockets, bookRockets };
