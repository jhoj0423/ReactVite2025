import { useState } from "react";
import { FoodAuth } from "../../common/LoginForm/FoodAuth";
import { useContext } from "react";
import "../Wishlist/WishlistPage.css"
export default function WishlistPage(){
    const {wishlist,removeFromWishlist,setWishlist} = useContext(FoodAuth)
    const [isOpen,setIsOpen] = useState(false)
    
    return(
        <>
            <section>
                <h2>찜한 상품 목록</h2>
                {wishlist.length>0?<button type="button" onClick={()=>setIsOpen(!isOpen)}>모두 빼기</button>:''}
                {isOpen && <div className="WishModal">
                    <div className="modal">
                        <h2>안내</h2>
                        <p>찜한 상품을 모두 취소하시겠습니까?</p>
                        <div>
                            <button type="button" onClick={()=>{setWishlist([]);setIsOpen(!isOpen)}} style={{backgroundColor:'#333',color:'yellowgreen'}}>확인</button>
                            <button type="button" onClick={()=>setIsOpen(!isOpen)}>취소</button>
                        </div>
                    </div>
                </div>}
                <ul>
                    {wishlist.length>0?
                    wishlist.map((item)=>(
                        <li key={item.id}>
                            <img src={item.image} alt={`${item.id}번째 이미지`} />
                            <div>
                                <strong style={{color:'yellowgreen'}}>{item.name}</strong>
                                <p>칼로리 : {item.caloriesPerServing}cal</p>
                                <p>평점 : {item.rating}</p>
                                <button type="button"onClick={()=>removeFromWishlist(item.id)}>장바구니에서 빼기</button>
                            </div>
                        </li>
                    ))
                    :
                    <li style={{justifyContent:"center"}}>찜한 제품이 아직 없습니다.</li>
                    }
                </ul>
            </section>
        </>
    )
}