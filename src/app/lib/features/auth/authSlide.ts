import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export interface IAuthState {
  isAuth: boolean;
  authUser: any;
}

const initialState: IAuthState = {
  isAuth: false,
  authUser: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthUser: (state, action: PayloadAction<any>) => {
      console.log('SET USER',action.payload)
      state.authUser = action.payload
      state.isAuth = true
    }
  },
  
});

export const { setAuthUser } = authSlice.actions;
export const authReducer = authSlice.reducer;
