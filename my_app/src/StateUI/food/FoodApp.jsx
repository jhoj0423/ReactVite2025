import React,{use, useState} from "react";

import FoodList from "../food/FoodList"
import CartModal from "../food/CartModal"

export default function FoodApp(){
    const foods = [
        {id:0,name:'삼겹살',price:15000},
        {id:1,name:'소고기',price:30000},
        {id:2,name:'양념갈비',price:18000}
    ]
    /* 장바구니 리스트 */
    const [cart,setCart] = useState([])
    /* 장바구니 모달  */
    const [isopen,setIsopen] = useState(false)

    /* 실행 로직 ====================================================================== */
        /* 장바구니 보이기 버튼 */
    const OrderMenu =(foods)=>{
        let cartCopy = [...cart]

        let findchk = false;/* 동일한 메뉴 체크 */

        for(let i=0;i<cart.length;i++){
            if(foods.id===cart[i].id){
                
                findchk = true; /* 동일 한 메뉴가 있습니다 */
                
                break;

               
            }else{
                
            }
        }
        if(!findchk){/*  */
            
            cartCopy.push({id:foods.id,name:foods.name,quantity:1})
        }else{

        }
        
        setCart(cartCopy)
        console.log(cart)
    }
    /* 빼기 버튼 */
    const Minus =(menu)=>{
        let cartCopy = [...cart]
        
        if(cartCopy[menu.id].quantity>1){
            cartCopy[menu.id].quantity -= 1
            
            setCart(cartCopy)
        }else{

        }
    }
    /* 더하기 버튼 */
    const Plus =(menu)=>{
        
        let cartCopy = [...cart]
        
        if(cartCopy[menu.id].quantity<10){
            cartCopy[menu.id].quantity += 1
            console.log(cartCopy[menu.id].quantity)
            setCart(cartCopy)
        }else{

        }
    }
    /* 삭제 버튼 */
    const delBtn =(menu)=>{
        let cartCopy = [...cart]
        cartCopy.splice(cartCopy[menu],1)
        setCart(cartCopy)
    }

    return(
        <>
            <div className="FoodBox" style={{
                backgroundColor:'#fadca3ff',
                padding:'20px',borderRadius:'10px'}}>
                <h2>🍖음식 주문</h2>
                <button type="button" onClick={()=>setIsopen(!isopen)}>장바구니</button>
                <FoodList foods={foods} OrderMenu={OrderMenu}/>
                {!isopen &&<CartModal cart={cart} Minus={Minus} Plus={Plus} setCart={setCart} delBtn={delBtn}/>}
            </div>
        </>
    )
}