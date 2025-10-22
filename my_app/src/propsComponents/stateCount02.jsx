/* useState() 훅(hook)를 import한다 */
import React,{useState} from 'react'
/* 한번에 함수 생성 하면서 Export까지 완성 */
export default function Counter02(){
    console.log("1. 컴포넌트 마운트됨 - 함수 실행 됨")
    /* useState()훅 이용하여 변수 지정 */
    /* const [이름,set이름]=useState(초기값) */
    const [count, setCount] = useState(0)
    console.log("2 usestate  호출됨 - 초기값 0",count)
    /* const plus =()=> {
        console.log("4. 이벤트 발생 - setCount가 실행요청")
        setCount(count+1)
    } */

    console.log("3.초기 핸더링 중...화면에 count 표시됨")
    return(
        <>
            <div>
                <p>카운트:{count}</p>
                <button type="button" onClick={()=>{
                    console.log("4. 이벤트 발생 - setCount가 실행요청")
                    setCount(count+1)
                    console.log("5. setCount 호출 후, 비동기 상대로 대기")
                    }}>증가</button>
                
            </div>
        </>
    )
}