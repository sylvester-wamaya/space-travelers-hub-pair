import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// general config

const initialState = {
  rockets: [],
  isLoading: true,
};

// extra reducers

const url = 'https://api.spacexdata.com/v3/rockets';

export const fetchRockets = createAsyncThunk(
  'fetch rockets',

  async () => {
    try {
      const response = await fetch(url);
      const res = await response.json();

      const rocketsInfo = [];

      res.forEach((item) => {
        if (item.id > 1) {
          const piece = {
            id: item.id,
            name: item.rocket_name,
            type: item.rocket_type,
            img: item.flickr_images[0],
            description: item.description,
            reserved: false,
          };
          rocketsInfo.push(piece);
        }
      });

      return rocketsInfo;
    } catch (error) {
      throw new Error();
    }
  },
);

const rocketSlice = createSlice({
  name: 'rocket slice',
  initialState,
  reducers: {
    reserve: (state, action) => {
      const found = state.rockets.find((ele) => ele.id === action.payload);
      found.reserved = true;
    },
    cancelReserve: (state, action) => {
      const found = state.rockets.find((ele) => ele.id === action.payload);
      found.reserved = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRockets.fulfilled, (state, action) => ({
      ...state,
      rockets: action.payload,
      isLoading: false,
    }));
  },
});
export const { reserve, cancelReserve } = rocketSlice.actions;

export default rocketSlice.reducer;
