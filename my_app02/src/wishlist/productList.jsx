import { useState } from "react";
import { useContext } from "react";
import { WishListContext } from "./WishlistContext";
import WishlistPage from "../wishlist/WishlistPage";

export default function ProductList(){
    const products = [
        { id: 1, name: '노트북', price: 1500000 },
        { id: 2, name: '마우스', price: 30000 },
        { id: 3, name: '키보드', price: 80000 },
    ];
    const [showList,setShowList] = useState(false)
    const {wishlist,setWishlist,addToWishlist,removeFromWishlist} = useContext(WishListContext)
    return(
        <>
            <div>
                <header style={{padding:'20px',display:"flex",justifyContent:'center',gap:'20px'}}>
                    <h2>🧡 찜하기 예제</h2>
                    <button type="button" onClick={()=>setShowList(!showList)}>{showList?'상품 보기':'찜 목록 보기'}</button>
                </header>
                <section>
                    {!showList?
                        <div>
                            <h4>🛒상품 목록</h4>
                            <ul>
                                {products.map((item)=>(
                                    <li key={item.id}>
                                        <span>{item.name}-{item.price.toLocaleString()}</span>
                                        {wishlist.find((wishlist)=>wishlist.id === item.id)===undefined?
                                        <button type="button" onClick={()=>{addToWishlist(item)}}>♡ 찜 하기</button>
                                        :
                                        <button type="button" onClick={()=>{removeFromWishlist(item.id)}}>💖 찜 해제</button>
                                        }
                                    </li>
                                ))}
                            </ul>
                            <p>현재 찜한 상품 수 : {wishlist.length}개</p>
                        </div>
                        :
                        <WishlistPage />
                    }
                </section>
            </div>
        </>
    )
}