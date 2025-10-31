export default function ExJ06Item(props){
    return(
        <>
            <li>
                <img src={`https://picsum.photos/150/120?random= ${props.item.id}`} alt="랜덤이미지" />
                <p>{props.item.title.slice(0,10)}</p>
                <p>{props.item.id+1000}원</p>
            </li>
        </>
    )
}
//https://picsum.photos/150/?random= ${props.item.id}