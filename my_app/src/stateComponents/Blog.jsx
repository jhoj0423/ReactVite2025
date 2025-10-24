import React,{useState} from "react";

export default function Blog(){
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
    /* React에서  로직함수 생성 후 return의 태그에 지정하는 방식의 차이로 */
    /* 인해 랜더링이 안될 수 있다. */
    /* 1. onClick={addPost} : 클릭 할 때 마다 실행 */
    /* 2. onClick={()=> addPost()} : 클릭할때마다 실행(정상) */
    /* 3. onClick={addPost()} : 랜더링시 바로 실행 => 즉시 실행 함수 */

    return(
        <>
            <ul style={{listStyle:'none'}}>
                {...posts.map((item,index)=>(
                    <li key={index} style={{marginBottom:'10px',border:'2px solid #0123ab68'}}>
                        <span onClick={()=>{setModalOpen(!modalOpen); setSelected(index);}} style={{
                            fontWeight:'bold',
                            color:'#0123ab68',
                            fontSize:'20px'
                            }}>
                                {item}
                        </span>
                        <button onClick={()=>likeBtn(index)}>👍{likes[index]}</button>
                        <p>2025년 11월 01일</p>
                        <button onClick={()=>delPost(index)}>삭제</button>
                    </li>
                ))}
            </ul>
            <BlogChild Writing={Writing} inputValue={inputValue} setInputValue={setInputValue} output={output} modalOpen={modalOpen}
            title={posts} setTitle={setPosts} selected={selected} setModalOpen={setModalOpen}/>
        </>
    )
}

function BlogChild(props){
    
    
    return(
        <>
            <input type="text" onChange={props.output} value={props.inputValue} placeholder="글 제목 입력"/>
            <button onClick={props.Writing}>글발행</button>
            {props.modalOpen && <Modal color={'lightblue'} title={props.title} setTitle={props.setTitle} index={props.selected}
            onClose={()=>props.setModalOpen(false)}/>}
        </>
    )
}

function Modal(props){
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
            <div className="BlogModal" style={{backgroundColor:props.color}}>
                <h4>{props.title[props.index]}</h4>
                <p>날짜 : 11월 1일</p>
                <p>상세내용 : 여기에 내용을 넣어 보세요</p>
                <button onClick={reWirght}>글수정</button>
                <button onClick={props.onClose}>닫기</button>
            </div>
        </>
    )
}