import { configureStore,  createSlice } from "@reduxjs/toolkit";


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
        (item) => item.roomId === newItem.roomId && item.id === newItem.id
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

    RemoveBookRoom(state , action){
      const {roomId , hotelId} = action.payload;
      const findRoomId = state.items.find(
        (item) =>  item.roomId === roomId && item.id === hotelId
      );

      if (findRoomId) {
        for(var i = 0; i < state.items.length; i++) {
          if(state.items[i].id === findRoomId.id && state.items[i].roomId === findRoomId.roomId) {
              state.items.splice(i, 1);
              break;
          }
      }
       
      
      }
    }
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

