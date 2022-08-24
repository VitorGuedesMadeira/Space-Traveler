import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// First, create the thunk
export const getRockets = createAsyncThunk(
  'rockets/getRockets',
  async () => {
    const response = await fetch('https://api.spacexdata.com/v3/rockets');
    return response.json();
  },
);

const initialState = [];

// Then, handle actions in your reducers:
const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    rocketsReducer: (state, action) => state.map((rocket) => {
      if (rocket.id !== action.payload.rocket.id) {
        return rocket;
      }
      return { ...rocket, reserved: !rocket.reserved };
    }),
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getRockets.fulfilled, (state, action) => action.payload);
  },
});

// Action creators are generated for each case reducer function
export const { rocketsReducer } = rocketsSlice.actions;

export default rocketsSlice.reducer;
