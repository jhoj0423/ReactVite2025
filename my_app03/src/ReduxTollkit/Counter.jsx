//4단계 컴포넌트 UI
//컴포넌트 useSelector로 상태를 읽고
//useDispatch로 액션 (increment, decrement, reset . . . )으ㅡㄹ 호출한다.
import { useSelector,useDispatch } from "react-redux";
import { increment,decrement,reset,incrementByAmount } from "./CounterSlice";

export default function Counter01(){
    //상태 읽기
    const count = useSelector((state)=>state.counter.value)
    //액션 실행 준비 => 내보내기
    const dispatch =useDispatch()

    return(
        <>
            <h2>카운터 : {count}</h2>
            <button type="button" onClick={()=>dispatch(increment())}>+</button>
            <button type="button" onClick={()=>dispatch(decrement())}>-</button>
            <button type="button" onClick={()=>dispatch(reset())}>0</button>
            <button type="button" onClick={()=>dispatch(incrementByAmount(5))}>+5</button>
        </>
    )
}