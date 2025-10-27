import React,{useState} from "react";
import MovieList from "../NewMovie/MovieList"
import MovieItem from "../NewMovie/MovieItem"
import MovieModal from "../NewMovie/MovieModal"


export default function NewMovieApp(){
    /* 선택한 영화가 없으면 null */
    const [select,setSelect] = useState(null)
    /* 영화 제목을 담는 변수 */
    const [title,setTitle] = useState('')
    /* 영화 제목을 담는 변서 */
    const [review,setReview] = useState('')
    /*  */
    const [Movie,setMovie] = useState([])
    /* 배열에 이미 0번 위치에 빈 오브젝트가 생성된 관계로 */
    /* 랜더가 되면서 무조건 빈 그림이 그려진다. */
    /* 예외 처리도 이미 랜더가 되고 난 후라 의미가 없다. */

    /* 실행 로직 ========================================================= */
    /* 영화 제목과 리뷰가 같이 저장되는 오브젝트 배열 생성 */

    const addMovie =()=>{
        if(!title || !review){
            return alert('리뷰를 입력해주세요')
        }else{
            let MovieCopy = [...Movie]
            MovieCopy.unshift({id:Movie.length,title:title,review:review})
            /* 삭제 이슈없이 작성하길 월하면 Date.now */
            setMovie(MovieCopy)
            setTitle('')
            setReview('')
        }
        console.log(Movie)
    }
    return(
        <>
            <div className="movieBox">
                <h2>영화 리뷰 관리 앱</h2>
                <input type="text" placeholder="영화 제목" onChange={(e)=>setTitle(e.target.value)} value={title}/>
                <input type="text" placeholder="리뷰" onChange={(e)=>setReview(e.target.value)} value={review}/>
                <button type="button" onClick={addMovie}>추가</button>
                {/* 자식 컴퍼넌트 태그로 가져오기 */}
                {/* 영화 제목 => movie  몇번째 영화 인가 => select*/}
                <MovieList Movie={Movie} select={select} setSelect={setSelect}/>
                {/* selectMovie !=null 아니면 모달 출력, 아니면 null, React에서 null은 빈값X */}
                {select !=null?<MovieModal select={select} onClose={()=>setSelect(null)}/>:null}
            </div>
        </>
    )
}