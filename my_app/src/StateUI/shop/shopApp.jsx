import React,{useState} from "react";
import ProductList from './productList.jsx'
import ProductItem from './productItem.jsx'
import CartModal from './CartModal.jsx'
import '../shop/shopApp.css'

export default function ShopApp(){
    const [products,setProducts]=useState([
        {id:1,name:'노트북',price:1200000},
        {id:2,name:'마우스',price:25000},
        {id:3,name:'키보드',price:50000},
    ])
    const [num,setNum] = useState([0,0,0])
    const [open,setOpen] = useState(false)
    const plus = num[0]+num[1]+num[2]
    return(
        <>
            <div className="shopBox">
                <h1>쇼핑몰🛒</h1>
                <button onClick={()=>setOpen(!open)}>장바구니 보기</button>
                {open && <CartModal open={()=>setOpen(!open)} plus={plus} products={products} num={num}/>}
                <ProductList products={products} num={num} setNum={setNum} plus={plus}/>
                <ProductItem />
            </div>
        </>
    )
}