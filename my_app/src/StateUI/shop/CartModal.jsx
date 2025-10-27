export default function CartModal(props){
    return(
        <>
            <div className="modalBack">
                <div className="shopModal">
                    <h2>장바구니</h2>
                    <ul style={{listStyle:'none',margin:0,padding:0}}>
                        {props.cart.length===0?<li>비어있습니다</li>:props.cart.map((item,index)=>(
                            <li key={index} style={{marginBottom:'20px'}}>{item.name} X {item.quantity}</li>
                        ))}
                    </ul>
                    <button onClick={props.open}>닫기</button>
                </div>
            </div>
            
        </>
    )
}

{/* <div className="shopModal">
                <h2>장바구니</h2>
                <ul>
                    {props.plus<1?<li>비어있습니다</li>:props.products.map((item,index)=>(
                        props.num[index]>0?<li key={index}><p>{item.name}X{props.num[index]}</p></li>:''
                    ))}
                </ul>
                <button onClick={props.open}>닫기</button>
            </div> */}