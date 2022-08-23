// action
const GETMISSION = 'space-traveler/missions/GETMISSION';
const JOINMISSION = 'space-traveler/missions/JOINMISSION';
const LEAVEMISSION = 'space-traveler/missions/LEAVEMISSION';

// reducer
const missionsReducer = (state = [], action) => {
  switch (action.type) {
    case GETMISSION:
      return [...action.missions];
    case JOINMISSION:
      return state.map((item) => (
        item.id === action.payload ? { ...item, joined: true } : item
      ));
    case LEAVEMISSION:
      return state.map((item) => (
        item.id === action.payload ? { ...item, joined: false } : item
      ));
    default:
      return state;
  }
};

export default missionsReducer;

// action creators
const getMissions = (missions) => ({
  type: GETMISSION,
  missions,
});

export const joinMission = (id) => ({
  type: JOINMISSION,
  payload: id,
});

export const leaveMission = (id) => ({
  type: LEAVEMISSION,
  payload: id,
});

const url = 'https://api.spacexdata.com/v3/missions';

export const fetchMission = () => (dispatch) => {
  const List = [];
  fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      accept: 'application/json',
    },
  })
    .then((res) => res.json())
    .then((result) => {
      const data = Object.entries(result);
      data.forEach((element) => {
        List.push({
          id: element[1].mission_id,
          name: element[1].mission_name,
          description: element[1].description,
        });
      });
      dispatch(getMissions(List));
    });
};
