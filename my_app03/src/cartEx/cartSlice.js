import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{list:[]},
    reducers:{
        addItem:((state)=>{state.value.push(item)}),
        removeItem:((state)=>{state.value.splice(item)}),
        resetItem:((state)=>{state.value=[]})
    }
})

export const {addItem,removeItem,resetItem} = cartSlice.actions
console.log(cartSlice.actions)
export default cartSlice.reducer