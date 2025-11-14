import { useSelector,useDispatch } from "react-redux";
import { addItem,removeItem,resetItem } from "./cartSlice";

export default function Cart(){
    const sampleProducts =[
        {id:1,name:'포켓몬',price:1000},
        {id:2,name:'디지몬',price:800},
        {id:3,name:'믹스몬',price:200},
    ]
    const dispatch = useDispatch()
    const cart = useSelector((state)=>state.cart.value)
    return(
        <>
            <h1>장바구니</h1>
            <ul>
                {sampleProducts.map((item)=>(
                    <li key={item.id}>
                        <span>{item.name} - {item.price}원 <button type="button" onClick={()=>{dispatch(addItem(item))}}>장바구니 추가</button></span>
                    </li>
                ))}
            </ul>
            <h2>장바구니</h2>
            <ul>
                {cart.length>0?cart.map((item)=>(
                    <li key={item.id}>
                        {item.name} - {item.price}원 <button type="button" onClick={()=>{dispatch(removeItem(item))}}>삭제</button>
                    </li>
                )):null}
            </ul>
            <button type="button" onClick={()=>{dispatch(resetItem())}}>장바구니 비우기</button>
        </>
    )
}