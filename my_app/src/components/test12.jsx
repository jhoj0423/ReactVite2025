/* 함수 이름은 반드시 대문자로 작성한다 */
function Test12(){
    const score =70;
    /* 함수 안에는 반드시 return() 안에 작성한다 */
    return(
        /* 빈태그 프래그먼트 이용해 작성 */
        /* 문제:1 score의 값에 따라 다른 색상을 표시하시오 */
        /* 80점 이상이면 파랑, 60점 이상이면 초록, 나머진 빨강 */
        
        <>
            <div style={score>=80?{color:'blue'}:score>=60?{color:'green'}:{color:'red'}}>
                점수: {score}점
            </div>
        </>
    )
}
/* Test12함수를 내보내기 */
export default Test12;