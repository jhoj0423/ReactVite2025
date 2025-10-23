import React,{useState} from "react";
import './CommentBoard.css';

export default function CommentBoard(){
    const [comments,setComments] = useState([
        {id:0,text:'리액스 재밌어요!',like:0},
        {id:1,text:'useState 너무 신기해요!',like:0},
    ])
    /* const [like,setLike] = useState([0,0]) */
    const [inputValue,setInputValue] = useState('')
    /* 실행 부분 =---------------------------------------------- */
    const changeText =(e)=>{
        setInputValue(e.target.value)
    }
    const output =()=>{
        let commentsCopy = [...comments]
        /* let likeCopy = [...like] */
        if(inputValue===''){
            return alert('댓글을 입력해주세요')
        }else{
            commentsCopy.unshift({id:comments.length,text:inputValue,like:0})
            setComments(commentsCopy)
        }
        /* likeCopy.unshift(0) */
        /* setLike(likeCopy) */
        setInputValue('')
    }
    const delBtn = (index) =>{
        let commentsCopy = [...comments]
        /* let likeCopy = [...like] */

        commentsCopy.splice(index,1)
        /* likeCopy.splice(index,1) */
        
        setComments(commentsCopy)
        /* setLike(likeCopy) */

        console.log(index)

    }
    const likeBtn =(index) =>{
        
        let commentsCopy = [...comments]
        commentsCopy[index].like += 1

        setComments(commentsCopy)
    }
    return(
        <>
            <div className="borde">
                <h1>💬댓글 게시판</h1>
                <input type="text" placeholder="댓글을 입력해주세요" value={inputValue} onChange={changeText}/>
                <button onClick={output}>등록</button>
                <div >
                    
                    <CommentBoardChild comments={comments} /* like={like} */ delBtn={delBtn} likeBtn={likeBtn}/>
                
                    
                </div>
            </div>
            
        </>
    )
}

function CommentBoardChild(props){
    return(
        <>
            {props.comments.map((ment,index)=>(
                <div className="bordeList" key={index}>
                    <p>{ment.text}</p>
                    <button onClick={()=>props.likeBtn(index)}>👍{ment.like}</button>
                    <button onClick={()=>props.delBtn(index)}>삭제</button>
                </div>
            ))}
        </>
    )
}