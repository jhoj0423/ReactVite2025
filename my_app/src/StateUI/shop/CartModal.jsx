export default function CartModal(props){
    return(
        <>
            <div className="shopModal">
                <h2>장바구니</h2>
                <ul>
                    {props.plus<1?<li>비어있습니다</li>:props.products.map((item,index)=>(
                        props.num[index]>0?<li key={index}><p>{item.name}X{props.num[index]}</p></li>:''
                    ))}
                </ul>
                <button onClick={props.open}>닫기</button>
            </div>
        </>
    )
}