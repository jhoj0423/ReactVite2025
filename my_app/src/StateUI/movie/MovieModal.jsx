export default function MovieModal(props){
    return(
        <>
            <div className="modal">
                <h2>{props.title[props.index]}</h2>
                <p>{props.reviews[props.index]}</p>
                <button onClick={props.setOpen}>닫기</button>

            </div>
        </>
    )
}