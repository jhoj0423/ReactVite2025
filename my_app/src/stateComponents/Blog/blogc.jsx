/* 부모 컨포넌트 */

import React,{useState} from "react";
import Modal from "../Blog/modal";
import PostList from "../Blog/postList";

export default function BlogC(){
    const [posts,setPosts] = useState(['남자 코트 추천','강남 우동맛집','파이썬독학'])
    const [likes,setLikes] = useState([0,0,0]);
    const [inputValue,setInputValue] = useState('');
        /* 모달 창이 안보이는 상태를 false 지정 */
    const [modalOpen,setModalOpen] = useState(false);
        /* 선택한 글의 인덱스 지정 */
    const [selected,setSelected] = useState(null);
    
    /* 실행 로직 시작--------------------------------------------------------- */
    
    const output =(e) =>{
        setInputValue(e.target.value)
    }
    const Writing =()=>{
        /* 배열 또는 오브젝트 또는 오브젝트 배열은 React에서 UseState로 훗 사용시 */
        /* 힙의 메모리 주소가 같은지 가른지를 비교하여 랜더링을 한다. */
        /* 고로 얕은 복사가 필요하다. */
        let postsCopy = [...posts]
        let likeCopy =[...likes]
        /* 예외 처리 : 혹시 모를 데이터의 필요없는 요류로 부터 데이터가 
        정확하게 입력되도록 로직으로 예외 처리하는 작업 */
        if(inputValue.trim()===''){
            return alert('자료를 입력하세요')
        }else{
            postsCopy.unshift(inputValue)
            setPosts(postsCopy)
            
        }
        likeCopy.unshift(0)
        setLikes(likeCopy)

        console.log(posts)
        console.log(likes)
        setInputValue('')
        
    }
    const delPost = (index) => {
        let postsCopy = [...posts]
        let likeCopy =[...likes]

        postsCopy.splice(index,1)
        likeCopy.splice(index,1)

        setPosts(postsCopy)
        setLikes(likeCopy)

        console.log(posts)
        console.log(likes)
        console.log(index)
        
    }
    const likeBtn =(index)=>{
        let likeCopy = [...likes]
        likeCopy[index] += 1
        setLikes(likeCopy)
        
    }
    /* 실행 로직 끝--------------------------------------------------------- */
    return(
        <>  
            <PostList posts={posts} likeBtn={likeBtn} delPost={delPost} likes={likes} setModalOpen={setModalOpen} modalOpen={modalOpen} setSelected={setSelected}/>
            <input type="text" onChange={output} value={inputValue} placeholder="글 제목 입력"/>
            <button onClick={Writing}>글발행</button>
            {modalOpen && <Modal color={'lightblue'} title={posts} setTitle={setPosts} index={selected}
            onClose={()=>setModalOpen(false)}/>}
        </>
    )
}