//1단계 : slice 파일 만들기
//리덕스의 상태 + 로직을 정의하는 부분이다.
//2단계에서는 state 구조, state를 변경하는 reducer 함수
//그리고 action 생성 함수를 정의한다.
//생성하느 라이브러리는 createSlice() import한다
import {createSlice} from '@reduxjs/toolkit'

const countSlice = createSlice({
    name:'counter' ,//stae이름으로 store에서 접근할때 key로 사용
    initialState: {value:0}, //초깃값 0 , 'a'
    //{list : []},{object:{id:1,name:아구몬}},(true,false)
    reducers:{
        increment:(state)=>{state.value += 1},
        decrement:(state)=>{state.value -= 1},
        reset:(state)=>{state.value = 0},
        //5씩 더하는 함수를 생성 => action의 payload를 이용해 상태를 변경
        incrementByAmount:(state,action)=>{
            state.value+=action.payload;
        }
    }
})
//카운트 액션즈는 액션.타입 => {type: 'counter/increment}...자동 생성
export const {increment,decrement,reset,incrementByAmount} = countSlice.actions
console.log(countSlice.actions)
export default countSlice.reducer;