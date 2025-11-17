import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{list:[]}, //list=[] 빈배열 초깃값
    reducers:{
        addItem:((state,action)=>{state.list.push(action.payload)}),
        removeItem:((state,action)=>{
            //같은 상품이 존재하면 삭제하고, 아니면 삭제 불가
            //배열이름.findIndex(()=>조건) 존재하는 값의 인덱스 번호 출력
            //값이 존재하지 않으면 -1 출력
            /* const delIndex = state.list.findIndex((item)=>item.id === action.payload)
            if(delIndex !== -1){ */
                state.list.splice(action.payload,1)
            /* } */
        }),
        resetItem:((state)=>{state.list=[]})
    }
})

//위의 작성한 로직 , 이름 모두 export로 내보낸다
export const {addItem,removeItem,resetItem} = cartSlice.actions
console.log(cartSlice.actions)
// switch ~ case 문을 이용한 함수를 자동생성하는 부분
export default cartSlice.reducer