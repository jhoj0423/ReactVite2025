export default function MovieModal(props){
    /* 모달 => 투명 회색 오버레이 위에 모달 출력되도록 */
    return(
        <>
            <div style={{position:'fixed',top:0,left:0,width:"100%",height:'100%',backgroundColor:'rgba(0,0,0,0.3)',display:'flex',justifyContent:'center',alignItems:'center'}}>
                <div style={{width:'300px',height:'200px',backgroundColor:'white',padding:'20px',borderRadius:'10px'}}>
                    <h2>{props.select.title}</h2>
                    <p>{props.select.review}</p>
                    <button type="button" onClick={props.onClose}>닫기</button>
                </div>
            </div>
        </>
    )
}