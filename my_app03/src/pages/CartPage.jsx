
import { useDispatch,useSelector } from "react-redux"
import { addItem,delItem,plusBtn,minusBtn } from "../store02/cartSlice"
import { useEffect,useState } from "react"
export default function CartPage(){
    const wish = useSelector((state)=>state.wish.wishList)
    const dispatch = useDispatch()
    const [num,setNum] = useState(0)
    useEffect(()=>{
        let result=0
        for(let i=0;i<wish.length;i++){
            result +=(wish[i].quantity*wish[i].price)
        }
        setNum(result)
    },[wish])
    return(
        <>
            <section>
                <h3>장바구니</h3>
                <ul>
                    {wish.length>0? wish.map((item)=>(
                        <li key={item.id} >
                            <img src={item.images[0]} alt="이미지" />
                            <h4>{item.title}</h4>
                            <p>{item.price*item.quantity}$</p>
                            <p>{item.quantity}개</p>
                            <button type="button" onClick={()=>{dispatch(delItem(item));}}>삭제</button>
                            <button type="button" onClick={()=>dispatch(plusBtn(item))}>+</button>
                            <button type="button" onClick={()=>dispatch(minusBtn(item))}>-</button>
                        </li>
                    )):<li style={{width:'1000px'}}><p>장바구니가 비어있습니다</p></li>}
                </ul>
                <h4>총 금액: {wish.length>0?<span>{num.toFixed(2)}</span>:0}$</h4>
            </section>
        </>
    )
}