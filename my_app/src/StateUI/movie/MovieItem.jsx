export default function MovieItem(props){
    const addReview =() =>{
        let moiveListCopy=[...props.moiveList]
        let reviewListCopy=[...props.reviewList]

        if(!props.title || !props.reviews){
            return alert("리뷰를 입력해주세요")
        }else{
            moiveListCopy.unshift(props.title)
            reviewListCopy.unshift(props.reviews)
            
            
        }
        props.setMovieList(moiveListCopy)
        props.setReviewList(reviewListCopy)

        props.setTitle('')
        props.setReviews('')

        console.log(props.moiveList)
        console.log(props.reviewList)
    }
    return(
        <>
            <input type="text" placeholder="영화제목" value={props.title} onChange={(e)=>props.setTitle(e.target.value)}/>
            <input type="text" placeholder="리뷰" value={props.reviews} onChange={(e)=>props.setReviews(e.target.value)}/>
            <button onClick={addReview}>추가</button>
        </>
    )
}