import { createSlice } from "@reduxjs/toolkit";

const user = JSON?.parse(localStorage.getItem("user"));
const authSlice = createSlice({
  name: "auth",
  initialState: { user },
  reducers: {
    setCredentials: (state, action) => {
      state.user = action.payload;
      if (!user) {
        console.log(action.payload)
        localStorage.setItem("user", JSON.stringify(action.payload));
      }
    },
    logOut: (state, action) => {
      state.user = null;
      localStorage.removeItem("user");
    },
  },
});
export const { setCredentials, logOut } = authSlice.actions;
export default authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.user?.username;
export const selectCurrentToken = (state) => state.auth.user?.accessToken;
export const selectCurrentRoles = (state) => state.auth.user?.roles;