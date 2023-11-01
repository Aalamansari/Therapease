import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  details: {
    isAuth: false, // Add the isAuth field with an initial value of false
    token:null, 
    expiry:null,
    user_id:null,
  },
};

export const credSlice = createSlice({
  name: "registerDetail",
  initialState,
  reducers: {
    addDetail: (state, action) => {
      const { detail } = action.payload;
      state.details = { ...state.details, ...detail }; // Merge the existing details with the new detail object
    },
  },
});

export const { addDetail } = credSlice.actions;

export default credSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   details: {
//     email: null,
//     isAuth: false, // Add isAuth to the initial state
//   },
// };

// export const credSlice = createSlice({
//   name: "registerDetail",
//   initialState,
//   reducers: {
//     addDetail: (state, action) => {
//       const { detail } = action.payload;
//       state.details = detail;
//     },
//     setIsAuth: (state, action) => {
//       state.details.isAuth = action.payload;
//     },
//   },
// });

// export const { addDetail, setIsAuth } = credSlice.actions;

// export default credSlice.reducer;