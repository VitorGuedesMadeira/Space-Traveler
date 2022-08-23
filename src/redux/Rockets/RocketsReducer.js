// actions
const TOGGLE_RESERVE_ROCKET = 'space-traveler/rockets/TOGGLE_RESERVE_ROCKET';
const GET_ROCKETS = 'space-traveler/rockets/GET_ROCKETS';

// reducer
const rocketsReducer = (state = [], action) => {
  switch (action.type) {
    case TOGGLE_RESERVE_ROCKET:
      return state.map((rocket) => {
        if (rocket.id !== action.payload) {
          return rocket;
        }
        return { ...rocket, reserved: !rocket.reserved };
      });
    case GET_ROCKETS:
      return action.payload;
    default:
      return state;
  }
};

export default rocketsReducer;

// action creators
const toggleReservationRocket = (id) => ({
  type: TOGGLE_RESERVE_ROCKET,
  payload: id,
});

export { toggleReservationRocket };

const getRockets = () => async (dispatch) => {
  const response = await fetch('https://api.spacexdata.com/v3/rockets').then((data) => data.json());
  dispatch({
    type: GET_ROCKETS,
    payload: response,
  });
};

export { getRockets };
