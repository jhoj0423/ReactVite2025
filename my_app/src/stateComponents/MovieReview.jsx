import React,{useState} from "react";
import './MovieReview.css';

export default function MovieReview01(){
    const [reviews,setReviews] = useState([
        {id:0,title:'인셉션',comment:'꿈속의 꿈!최고였어요.',like:0},
        {id:1,title:'인터스텔라',comment:'음악이 너무 웅장해요.',like:0},
    ])
    const [titleInputValue,setTitleInputValue] = useState('')
    const [reviewInputValue,setReviewInputValue] = useState('')

    /* 실행 부분 -------------------- */
    const titleOutput = (e) =>{
        setTitleInputValue(e.target.value)
    }
    const reviewOutput = (e) =>{
        setReviewInputValue(e.target.value)
    }
    const addReview =()=>{
        let reviewsCopy = [...reviews]
        reviewsCopy.unshift({id:reviewsCopy.length,title:titleInputValue,comment:reviewInputValue,like:0})
        setReviews(reviewsCopy)
        setTitleInputValue('')
        setReviewInputValue('')
    }

    const likeBtn = (index) =>{
        let reviewsCopy = [...reviews]
        reviewsCopy[index].like += 1
        setReviews(reviewsCopy)
    }
    const delReview = (index) =>{
        let reviewsCopy = [...reviews]
        reviewsCopy.splice(index,1)
        setReviews(reviewsCopy)
    }

    /* 실행부분 끝 ------------------ */
    return(
        <>
            <div className="myReview">
                <h1>🎬나의 영화 리뷰</h1>
                <div className="Review">
                    <input type="text" placeholder="영화 제목" value={titleInputValue} onChange={titleOutput} />
                    <input type="text" placeholder="한줄평" value={reviewInputValue} onChange={reviewOutput}/>
                    <button id="addBtn" onClick={addReview}>등록</button>
                </div>
                <ul className="ReviewList">
                    {reviews.map((movie,index)=>(
                        <li key={index}>
                            <h3>{movie.title}</h3>
                            <p>{movie.comment}</p>
                            <button onClick={()=>likeBtn(index)}>👍{movie.like}</button>
                            <button className="delBtn" onClick={()=>delReview(index) }>삭제</button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}