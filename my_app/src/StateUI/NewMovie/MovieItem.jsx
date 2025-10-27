/* MovieList 부모의 자식 */
/* MovieApp 손자 */


export default function MovieItem(props){
    return(
        <>
            <li>{props.movie.title}</li>
            <button type="button" onClick={()=>props.setSelect(props.movie)}>상세보기</button>
        </>
    )
}