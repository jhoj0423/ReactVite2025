import MovieItem from "../NewMovie/MovieItem"
export default function MovieList(props){
    return(
        <>
            <ul>
                {props.Movie.map((movie)=>(
                    <MovieItem key={movie.id} movie={movie} setSelect={props.setSelect}/>
                ))}
            </ul>
        </>
    )
}