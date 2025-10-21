/* 구조분해 할당이란 : 변수지정한 값 */
/* props 부모 -> 자식 */
function Child({name}){
    return(
        <>
        {/* props.name */}
            <h2>안녕하세요! {name}님</h2>
        </>
    )
}
export default Child;