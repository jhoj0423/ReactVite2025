export default function OrderList(props){
    return(
        <>
            <div className="modal">
                <div className="orderlist">
                    <h2>주문 목록<button type="button" onClick={props.open}>X</button></h2>
                    <ul className="list_scroll">
                        {props.order.map((menu)=>(
                            <li key={menu.id} className="">
                                <p>{menu.name}</p>
                                <span>{menu.price.toLocaleString()} X {menu.QTY}</span>
                                <span>=가격 : {(menu.price*menu.QTY).toLocaleString()} 원</span>
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
                        <p>총 결제 금액 <span>{props.paymoney.toLocaleString()}</span>원</p>
                        <button type="button" onClick={props.orderchk}>주문하기</button>
                    </div>
                </div>
                {props.openModal && <div className="chkmodal">
                    <h2>안내사항</h2>
                    <p>주문이 완료되었습니다</p>
                    <button type="button" onClick={props.modalChk}>확인</button>
                </div>}
            </div>
        </>
    )
}