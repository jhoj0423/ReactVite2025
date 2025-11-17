import { useSelector,useDispatch } from "react-redux";
import { addItem,removeItem,resetItem } from "./cartSlice";

export default function Cart(){
    const sampleProducts =[
        {id:1,name:'사과',price:1000},
        {id:2,name:'수박',price:800},
        {id:3,name:'키위',price:200},
    ]
    const dispatch = useDispatch()
    const cart = useSelector((state)=>state.cart.list)
    console.log(cart)
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
                {cart.map((item,index)=>(
                    <li key={index}>
                        {item.name} - {item.price}원 <button type="button" onClick={()=>{dispatch(removeItem(index))}}>삭제</button>
                    </li>
                ))}
            </ul>
            <button type="button" onClick={()=>{dispatch(resetItem())}}>장바구니 비우기</button>
        </>
    )
}