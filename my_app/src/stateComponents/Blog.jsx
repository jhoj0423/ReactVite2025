import React,{useState} from "react";

export default function Blog(){
    const [posts,setPosts] = useState(['남자 코트 추천','강남 우동맛집','파이썬독학'])
    const [likes,setLikes] = useState([0,0,0])
    /* const [modalOpen,setModalOpen] = useState(false)
    const [selected,setSelected] = useState(0)
    const [inputValue,setInputValue] = useState('') */
    
    const likeBtn =()=>{
        setLikes(likes)
        console.log(likes[0])
        
    }
    const Writing =()=>{
        setPosts([...posts,posts.push('가가')])
    }
    return(
        <>
            <ul style={{listStyle:'none'}}>
                {posts.map((item,index)=>(
                    <li key={index} style={{marginBottom:'10px',border:'2px solid #0123ab68'}}>
                        <span style={{fontWeight:'bold',color:'#0123ab68',fontSize:'20px'}}>{item}</span>
                        <button onClick={likeBtn}>👍{likes[index]}</button>
                        <p>2025년 11월 01일</p>
                        <button>삭제</button>
                    </li>
                ))}
            </ul>
            <input type="text" />
            <button onClick={Writing}>글발행</button>
        </>
    )
}

/* function BlogChild(props){
    
    
    return(
        <>
            
        </>
    )
} */