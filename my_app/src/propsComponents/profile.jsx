/* 부모 컴포넌트 생성 : parent03 */
/* 부모 const userName = '진달래' */
/* 부모 const age = '25' */

/* 자식 컴포넌트 생성 : profile */
/* <div> */
/*  <h2> 이름: {}</h2} */
/*  <p> 나이: {}</p} */
/*  </div> */

function Parent03(){
    const userName = '진달래'
    const age = '25'
    return(
        <>
            <Profile age={age} userName={userName}/>
        </>
    )
}
export default Parent03

function Profile(props){
    return(
        <>
            <div>
                <h2>이름: {props.userName}</h2>
                <p>나이: {props.age}</p>
            </div>
        </>
    )
}

