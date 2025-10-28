export default function CartModal(props){
    return(
        <>
            <div className="modalBox">
                <h2>장바구니</h2>
                <ul style={{listStyle:'none',padding:'0',margin:'0'}}>
                    {props.cart.map((menu)=>(
                        menu.length===0?<li>장바구니가 비어있습니다.</li>:
                        <li key={menu.id} style={{marginBottom:'20px',display:'flex',justifyContent:'space-between',border:'3px solid #f1a65aff',padding:'17px',height:'40px',lineHeight:'40px',borderRadius:'10px',width:'300px'}}>
                            <span>{menu.name}</span>
                            <button type="button" onClick={()=>props.Plus(menu)} style={{padding:'10px'}}>+</button>
                            <strong>{menu.quantity}</strong>
                            <button type="button" onClick={()=>props.Minus(menu)} style={{padding:'10px'}}>-</button>
                            <button type="button" onClick={()=>props.delBtn(menu)} style={{padding:'10px'}}>주문취소</button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}