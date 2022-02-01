import {configureStore , createSlice} from '@reduxjs/toolkit'
  
const initialState = {items:[] , logged:false , bookInfo : true}
 const counterSlice = createSlice({
    name: 'addCard',
    initialState,
    reducers: {
    addInfo(state , action){
        const newItem = action.payload;
        
        const existingItem = state.items.find(item => 
            item.id === newItem.id
        )
        if (!existingItem) {
            state.items.push({
                id:newItem.id,
                name:newItem.name,
                city:newItem.city,
                price:newItem.price,
                rating:newItem.rating,
                distance:newItem.distance,
                location:newItem.location,
                imgs:newItem.imgs,
                rooms:newItem.rooms,
roomId:newItem.roomId
            })
        }
        else {
           state.bookInfo =false
        }
    },
    loggedAcount(state){
        state.logged = false

    },
    loginAcount(state){
        state.logged =true
    },
   bookCancel(state){
state.bookInfo = true
    }
    },
  })

export const itemsAction = counterSlice.actions

export const store = configureStore({
  reducer: {cardInfo : counterSlice.reducer },
})