function Counter01(){
    /* 버튼을 클릭해도 콘솔의 값은 누적되어 보여짐 */
    /* 그러나 현재 카운트의 값은 숫자 변하지 않는다 */
    /* 이유: count는 단순히 메모리 안에서만 값이 변경 되었고 */
    /*       REact는 값이 변경된 것 알지 못한다. */
    /* 값이 동적으로 변해야 하는 경우는 무조건 userState 훅(hook)사용 */
    let count = 0

    function increase(){
        count=count+1
        console.log('count 누적'+count)
    }
    return(
        <>
            <p>현재 카운트 : {count}</p>
            <button type="button" onClick={increase}>+1</button>
        </>
    )
}
export default Counter01