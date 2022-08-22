// actions
const TOGGLE_RESERVE_ROCKET = 'space-traveler/rockets/TOGGLE_RESERVE_ROCKET';
const GET_ROCKETS = 'space-traveler/rockets/GET_ROCKETS';
const initialState = [];

// reducer
const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_RESERVE_ROCKET:
      return 'test1';
    case GET_ROCKETS:
      return 'test2';
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
