// Actions
const MISSIONS_DEFAULT = 'space-travelers-hub/missions/MISSIONS_DEFAULT';
const JOIN = 'space-travelers-hub/missions/JOIN';
const LEAVE = 'space-travelers-hub/missions/REMOVE';

// Reducer
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case MISSIONS_DEFAULT:
      return action.payload;

    default:
      return state;
  }
}

// Action Creators
export function getAllMissions(missions) {
  return { type: MISSIONS_DEFAULT, payload: missions };
}

export function joinMission(book) {
  return async (dispatch) => {
  // fetch api
    dispatch({ type: JOIN, payload: book });
  };
}

export function leaveMission(id) {
  return async (dispatch) => {
    // fetch api
    dispatch({ type: LEAVE, payload: id });
  };
}
