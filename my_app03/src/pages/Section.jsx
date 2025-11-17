import { useDispatch, useSelector } from "react-redux"
import '../pages/CartPage.css'
import { addItem } from "../store02/cartSlice"
import { useEffect } from "react"

export default function Section(){
    const items = useSelector((state)=>state.items.list)
    const wish = useSelector((state)=>state.wish.wishList)
    const dispatch = useDispatch()
  

    return(
        <section>
            <h2>상품 목록</h2>
            <ul>
                {items.map((item)=>(
                    <li key={item.id} onClick={()=>{dispatch(addItem(item));console.log('b')}}>
                        <img src={item.images[0]} alt="이미지" />
                        <h4>{item.title}</h4>
                        <p>{item.price}$</p>
                        <button type="button">담기</button>
                    </li>
                ))
                
                }
            </ul>
        </section>
    )
}