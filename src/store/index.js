import { configureStore, createSelector, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
  items: [],
  logged: false, 
  bookInfo: true,
  addRoom: false,
};
const counterSlice = createSlice({
  name: "addCard",
  initialState,
  reducers: {
    addInfo(state, action) {
      const newItem = action.payload;

      const existingItem = state.items.find(
        (item) => item.roomId === newItem.roomId
      );
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          city: newItem.city,
          price: newItem.price,
          rating: newItem.rating,
          distance: newItem.distance,
          location: newItem.location,
          imgs: newItem.imgs,
          rooms: newItem.rooms,
          isChecked: newItem.isChecked,
          roomId: newItem.roomId,
        });
        state.addRoom = true;
      } else {
        state.bookInfo = false;
      }
    },
    loggedAcount(state) {
      state.logged = false;
    },
    loginAcount(state) {
      state.logged = true;
    },
    bookCancel(state) {
      state.bookInfo = true;
    },
    cancelRoom(state) {
      state.addRoom = false;
    },
    removeRoom(state, action) {
      const hotelRoomId = action.payload;

      const findRoomId = state.items.find(
        (item) => item.roomId === hotelRoomId
      );
      if (findRoomId) {
        state.items.splice(findRoomId, 1);
      }
    },
  },
});

export const itemsAction = counterSlice.actions;

export const store = configureStore({
  reducer: { cardInfo: counterSlice.reducer },
});



// export const selectItems = createSelector((state) => state.cardInfo.items, (id, items) => {
//   console.log(id);
//   return items;
// });

