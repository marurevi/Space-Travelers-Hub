import getApiMissions from '../../helpers/API-missions';

// Actions types
const GET_MISSIONS = 'space-travelers-hub/missions/GET_MISSIONS';
const JOIN = 'space-travelers-hub/missions/JOIN';
const LEAVE = 'space-travelers-hub/missions/REMOVE';

// Reducer
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case GET_MISSIONS:
      return action.payload;

    case JOIN:
      return state.map((mission) => {
        if (mission.id !== action.payload) return mission;
        return { ...mission, reserved: true };
      });

    case LEAVE:
      return state.map((mission) => {
        if (mission.id !== action.payload) return mission;
        return { ...mission, reserved: false };
      });

    default:
      return state;
  }
}

// Action Creators - THUNK (MIDDLEWARE)
const getAllMissions = async (dispatch) => {
  const missions = await getApiMissions();
  dispatch({ type: GET_MISSIONS, payload: missions });
};

export function joinMission(id) {
  return async (dispatch) => {
    dispatch({ type: JOIN, payload: id });
  };
}

export function leaveMission(id) {
  return async (dispatch) => {
    dispatch({ type: LEAVE, payload: id });
  };
}

export { getAllMissions };
