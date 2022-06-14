import getApiMissions from '../../helpers/API-missions';

// Actions
const GET_MISSIONS = 'space-travelers-hub/missions/GET_MISSIONS';
const JOIN = 'space-travelers-hub/missions/JOIN';
const LEAVE = 'space-travelers-hub/missions/REMOVE';

// Reducer
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case GET_MISSIONS:
      return action.payload;

    case JOIN:
      return action.payload; // CHECK THIS

    default:
      return state;
  }
}

// Action Creators
const getAllMissions = async (dispatch) => {
  const missions = await getApiMissions();
  dispatch({ type: GET_MISSIONS, payload: missions });
};

const joinMission = async (id) => {
  dispatch({ type: JOIN, payload: id });
};

export function leaveMission(id) {
  return async (dispatch) => {
    // fetch api
    dispatch({ type: LEAVE, payload: id });
  };
}

export { getAllMissions, joinMission };
