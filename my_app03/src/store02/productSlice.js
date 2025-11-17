import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
    name: 'items',
    initialState:{list:[]},
    reducers:{
        setList:(state,action)=>{
            state.list = action.payload
            console.log(action.payload)
        },
        
    }
})

export const {setList} =ProductSlice.actions
console.log(ProductSlice.actions)
export default ProductSlice.reducer