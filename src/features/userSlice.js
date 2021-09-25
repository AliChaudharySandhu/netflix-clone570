import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    subscriptions: {

    },
    products:{
      
    }
  },
  reducers: {
    login: (state, action) =>{
      state.user = action.payload
    },

    logout: (state) =>{
      state.user = null
    },
    subscribe: (state = null , action) =>{
      state.user.subscriptions = action.payload
    },
    loadProducts: (state, action) =>{
      state.user.products = action.payload
    }
  }
    
});

export const { login, logout, subscribe, loadProducts } = userSlice.actions;


// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectUser = state => state.user.user;

export default userSlice.reducer;
