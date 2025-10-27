/* 자식 : 모달 UI */

export default function Modal(props){
    /* 업데이트 함수 필요 */
    /*  얕은 복사 필요 */
    /* 1. props.title를 얕은 복사  let titleCopy =[...props.title]*/
    /* 2. prompt("새 제목을 입력하세요",~~~) */
    /* titleCopy[props.index] = prompt("새 제목을 입력하세요",titleCopy[props.index]) */
    /* 3. titleCopy[props.index] => titleCopy[0] => 남자 코트 추천*/
    /* 4. 수정 한 글제목을 업데이트 해야함 props.setPosts(titleCopy) */
    const reWirght =()=>{
        let titleCopy = [...props.title]
        titleCopy[props.index] = prompt("새 제목을 입력하세요",titleCopy[props.index]) || titleCopy[props.index]
        /* ||  => Or */
        props.setTitle(titleCopy)
    }
    return(

        <>
            <div style={{width:'100%',height:'100%',background:'rgba(0,0,0,0.2)',position:'fixed',top:0,left:0}}>
                <div className="BlogModal" style={{backgroundColor:props.color,borderRadius:'10px',padding:'20px',width:'200px',position:'fixed',top:'50%',left:'50%'}}>
                    <h4>{props.title[props.index]}</h4>
                    <p>날짜 : 11월 1일</p>
                    <p>상세내용 : 여기에 내용을 넣어 보세요</p>
                    <button onClick={reWirght}>글수정</button>
                    <button onClick={props.onClose}>닫기</button>
                </div>
            </div>
            
        </>
    )
}