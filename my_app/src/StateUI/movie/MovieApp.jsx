import React,{useState} from "react";
import MovieList from '../movie/MoiveList'
import MovieItem from '../movie/MovieItem'
import MovieModal from '../movie/MovieModal'

export default function MovieApp(){
    const [title,setTitle] = useState('')
    const [reviews,setReviews] = useState('')
    const [moiveList,setMovieList] = useState([])
    const [reviewList,setReviewList] = useState([])
    const [open,setOpen] = useState(false)
    const [listNum,setListNum] =useState(null)

    
    return(
        <>
            <div className="moiveBox">
                <h1>영화 리뷰 관리 앱 🎬</h1>
                <MovieItem title={title} reviews={reviews} setTitle={setTitle} setReviews={setReviews}
                moiveList={moiveList} reviewList={reviewList} setMovieList={setMovieList} setReviewList={setReviewList}/>
                
                <MovieList moiveList={moiveList} open={open} setOpen={setOpen} listNum={listNum} setListNum={setListNum}/>
                {open && <MovieModal title={moiveList} reviews={reviewList} open={open} setOpen={()=>setOpen(!open)}
                    index={listNum}/>}
            </div>
        </>
    )
}