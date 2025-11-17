import { createSlice } from "@reduxjs/toolkit";

const cartSlice01 = createSlice({
    name:'wish',
    initialState:{wishList:[]},
    reducers:{
        addItem:(state,action)=>{
            console.log('담았니')
            console.log(action.payload)
            const addIndex = state.wishList.find((item)=>item.id === action.payload.id)
            if(addIndex===undefined){
                state.wishList.push({...action.payload,quantity:1})
                alert(`${action.payload.title}이 추가되었습니다`)
            }else{
                addIndex.quantity +=1
            }
            
        },
        delItem:(state,action)=>{
            const delIndex = state.wishList.findIndex((item)=>item.id===action.payload.id)
            console.log(delIndex)
            if(delIndex !== -1){
                state.wishList.splice(delIndex,1)
            }
        },
        plusBtn:(state,action)=>{
            const plusIndex = state.wishList.find((item)=>item.id === action.payload.id)
            if(plusIndex.quantity<10){
                plusIndex.quantity +=1
            }else{
                alert('최댓값')
            }
        },
        minusBtn:(state,action)=>{
            console.log('마이너스')
            const minusIndex = state.wishList.find((item)=>item.id === action.payload.id)
            if(minusIndex.quantity!==1){
                minusIndex.quantity -=1
            }else{
                alert('최솟값')
            }
        },
    }
})
export const {addItem,delItem,plusBtn,minusBtn}= cartSlice01.actions
export default cartSlice01.reducer