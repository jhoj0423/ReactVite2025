import React,{useState} from "react";
import ProductList from './productList.jsx'
import ProductItem from './productItem.jsx'
import CartModal from './CartModal.jsx'
import '../shop/shopApp.css'

export default function ShopApp(){
    const products =[
        {id:1,name:'노트북',price:1200000},
        {id:2,name:'마우스',price:25000},
        {id:3,name:'키보드',price:50000},
    ]
    const [cart,setCart] = useState([])
    const [open,setOpen] = useState(false)
    const [select,setSelect] = useState(null)

    /* 실행 로직 ================================================ */
    
    //배열이름.findIndex((요소,인덱스,원본배열) => return조건)
    //=>찾고 싶은 항목이 존재하면 그 항목이 존재하는 배열의 인덱스 번호를 반환
    //=>찾고 싶은 항목이 존재하지 않으면 -1 반환한다.

    //const index = cart.findIndex((item)=>item.id===products.id)
    //상품이 존재한다 => 1 ,상품이 존재하지 않는다 =>-1(없다)

   /*  const addItem =()=>{
        
        let cartCopy = [...cart]
        //같은 상품이 존재하는지 확인
        let findchk = false;
        
        
        for(let i=0;i<cartCopy.length;i++){
            //상품은 product의 id와 비교 :고유의 값이므로
            if(products.id ===  cartCopy[i].id){
                //상품이 같은것이 존재
                cartCopy[i].quantity += 1
                findchk =true ;
                break;
            }else{}
        }

        // 장바구니에 상품이 존재한다 => index !== -1 

        if(index !== -1){
            cartCopy[index].quantity += 1
        }else{
            cartCopy.push({id:products.id,name:products.name,price:products.price,quantity:1})
        }

        
        setCart(cartCopy)
        console.log(cart)
    } */

    const addItem =(products)=>{
        
        let cartCopy = [...cart]
        //같은 상품이 존재하는지 확인
        let findchk = false;
        
        
        for(let i=0;i<cartCopy.length;i++){
            //상품은 product의 id와 비교 :고유의 값이므로
            if(products.id ===  cartCopy[i].id){
                //상품이 같은것이 존재
                cartCopy[i].quantity += 1
                findchk =true ;
                break;
            }else{}
        }

        if(!findchk){
            cartCopy.push({id:products.id,name:products.name,price:products.price,quantity:1})
        }
        setCart(cartCopy)
        console.log(products.id)
        console.log(cartCopy)
    }
    
    /* const addItem=(products)=>{
        console.log(select)
        console.log(cart)
        let cartCopy=[...cart]
        cartCopy.push({...products[select],quantity:1})
        setCart(cartCopy)
    } */

    return(
        <>
            <div className="shopBox">
                <h1>쇼핑몰🛒</h1>
                <button onClick={()=>setOpen(!open)}>장바구니 보기</button>
                <ProductList products={products} addItem={addItem} setSelect={setSelect}/>
                {open && <CartModal open={()=>setOpen(!open)} products={products} cart={cart}/>}
            </div>
        </>
    )
}

/* const [products,setProducts]=useState([
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
    ) */



    /* const addItem =()=>{
        
        let cartCopy = [...cart]
        //같은 상품이 존재하는지 확인
        let findchk = false;
        
        
        for(let i=0;i<cartCopy.length;i++){
            //상품은 product의 id와 비교 :고유의 값이므로
            if(products.id ===  cartCopy[i].id){
                //상품이 같은것이 존재
                cartCopy[i].quantity += 1
                findchk =true ;
                break;
            }else{}
        }

        if(!findchk){
            cartCopy.push({id:products.id,name:products.name,price:products.price,quantity:1})
        }
        setCart(cartCopy)
        console.log(cart)
    } */