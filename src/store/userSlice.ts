import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  access_token: string | null;
}

const initialState: UserState = {
  access_token: localStorage.getItem("access_token"),
};

const userSlice = createSlice({
  name: 'userToken',
  initialState,
  // todo Check if we need refresh token in redux
  reducers: {
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.access_token = action.payload;
    },
    clearAccessToken: (state) => {
      state.access_token = null
    },
  },
});

export const { setAccessToken, clearAccessToken } = userSlice.actions;
export default userSlice.reducer;
