//Counter.jsx 파일은 컴포넌트 파일로 UI
//useSelector 와 useDispatch인 훅을 이용하여 상태를 읽고, 액션을 보낸다.
//useDispatch는 단순히 값만 보낸다.
//counterReducer이 그 값을 처리해서 store에 저장한다.
//Counter.jsx가 useSelector로 그걸 읽는다.
import { useSelector,useDispatch } from "react-redux";
export default function Counter(){
    //useSelector이용해 state의 count를 읽어 온다.
    const count = useSelector(state=>state.count)
    //useDispatch를 이용해서 내보낸다.
    const dispatch = useDispatch()

    // + => 10 까지 =>10 alert()창띄우기
    // - => 0 까지 =>0 alert()창띄우기
    const plus =()=>{
        if(count===10){
            alert('max')
        }else{
            dispatch({type:"INCREMENT"})
        }
    }
    const minus =()=>{
        if(count<=0){
            alert('min')
        }else{
            dispatch({type:"DECREMENT"})
        }
    }

    return(
        <>
            <h2>Count {count}</h2>
            <button type="button" onClick={plus}>+</button>
            <button type="button" onClick={minus}>-</button>
        </>
    )
}