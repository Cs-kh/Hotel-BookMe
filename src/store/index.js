import { configureStore,  createSlice } from "@reduxjs/toolkit";
import hotelSlice from "./features/hotelSlice";
import hotelBookSlice from "./features/bookSlice";
const initialState = {
  logged: false, 
  email:''
};
const counterSlice = createSlice({
  name: "addCard",
  initialState,
  reducers: {

    loggedAcount(state) {
      state.logged = false;
      state.email = '';
    },
    loginAcount(state) {
      state.logged = true;
    },

    addEmail(state,action){
      const email= action.payload;
      state.email = email;
    }
  },
});

export const itemsAction = counterSlice.actions;

export const store = configureStore({
  reducer: { cardInfo: counterSlice.reducer,
  hotels: hotelSlice,
  hotelRoomBook:hotelBookSlice
  },
});



// export const selectItems = createSelector((state) => state.cardInfo.items, (id, items) => {
//   console.log(id);
//   return items;
// });

