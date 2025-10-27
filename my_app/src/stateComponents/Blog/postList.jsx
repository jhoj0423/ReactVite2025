export default function PostList(props){
    return(
        <>
            <ul style={{listStyle:'none'}}>
                {props.posts.map((item,index)=>(
                    <li key={index} style={{marginBottom:'10px',border:'2px solid #0123ab68'}}>
                        <span onClick={()=>{props.setModalOpen(!props.modalOpen);props.setSelected(index)}}>{item}</span>
                        <button onClick={()=>props.likeBtn(index)}>👍{props.likes[index]}</button>
                        <p>2025년 11월 01일</p>
                        <button onClick={()=>props.delPost(index)}>삭제</button>
                    </li>
                    
                ))}
            </ul>
        </>
    )
}

