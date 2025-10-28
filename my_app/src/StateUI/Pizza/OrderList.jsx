export default function OrderList(props){
    return(
        <>
            <div className="orderlist">
                <h2>주문 목록</h2>
                <ul>
                    {props.order.map((menu)=>(
                        <li key={menu.id} className="">
                            <p>{menu.name}</p>
                            <span>{menu.price} X {menu.QTY}</span>
                            <span>가격 : {menu.price*menu.QTY} 원</span>
                            <div className="buttons">
                                <button type="button" onClick={()=>props.minusBtn(menu)}>-</button>
                                <strong>{menu.QTY}</strong>
                                <button type="button" onClick={()=>props.plusBtn(menu)}>+</button>
                                <button type="button" onClick={()=>props.delBtn(menu)}>X</button>
                            </div>
                        </li>
                    ))}
                </ul>
                <div className="pay">
                    <p>총 결제 금액 <span>{props.paymoney}</span>원</p>
                </div>
            </div>
        </>
    )
}