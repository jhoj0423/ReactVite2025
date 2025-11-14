// counterReducer.js 파일은
// 상태 (state) 와 동작(action)을 정의하는 가장 핵심 로직이다
// Redux의 동작 원리
// 리듀서 -> 스토어-> Provider -> 컴포넌트
const initialstate = {count:0} //초기값 initialstate는 예약어이다. ->고로 작명 X
export default function counterReducer(state=initialstate,action){
    //swich문을 이용하여 직접 함수를 생성해야 됨
    switch(action.type){
        case 'INCREMENT':
            return{count:state.count+1}//count 가 1씩 증가
        case 'DECREMENT':
            return{count:state.count-1}//count 가 1씩 감소
        default:
            return state;
    }
}