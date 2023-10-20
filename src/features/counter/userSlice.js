import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
export const userSlice = createSlice({
  name: 'user',
  initialState:{
    user:null
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    login : (state,action)=>{
      state.user=action.payload
      console.log(action.payload)
    },
    logOut : (state ,action)=>{
      state.user=null
    }
  },
  extraReducers: (builder) => {
    
     
  },
});

export const { login, logOut } = userSlice.actions;

export const selectuser = (state) => state.user.user;


export default userSlice.reducer;
