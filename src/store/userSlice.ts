import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  isAuth: boolean | null,
  initialized: boolean,
}

const initialState: UserState = {
  isAuth: null,
  initialized: false,
};


const userSlice = createSlice({
  name: 'userToken',
  initialState,
  // todo Check if we need refresh token in redux
  reducers: {
    setAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
    setInitialized: (state, action: PayloadAction<boolean>) => {
      state.initialized = action.payload;
    },
  },
});

export const { setAuth, setInitialized } = userSlice.actions;
export default userSlice.reducer;
