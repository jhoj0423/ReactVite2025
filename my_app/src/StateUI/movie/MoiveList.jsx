export default function MovieList(props){
    const infoChk =(index) =>{
        props.setOpen(true)
        props.setListNum(index)
    }
    
    return(
        <>
            <ul className="movieList">
                {props.moiveList.map((title,index)=>(
                    <li key={index}>
                        <span>{title}</span>
                        <button onClick={()=>infoChk(index)} >상세보기</button>
                    </li>
                ))}
            </ul>
        </>
    )
}