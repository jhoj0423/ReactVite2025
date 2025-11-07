import { useState } from "react";
import { useContext } from "react";
import { WishListContext } from "./WishlistContext";

export default function WishlistPage(){
    const {wishlist,removeFromWishlist,isInWishlist,remove} = useContext(WishListContext)
    return(
        <>
            <div>
                <h4>💚 찜한 상품 목록</h4>
                <button type="button" onClick={remove}> 찜 목록 초기화 </button>
                <ul>
                    {wishlist.length>0?wishlist.map((item)=>(
                        <li key={item.id}>
                            <span>{item.name}-{item.price.toLocaleString()}</span>
                            <button type="button" onClick={()=>removeFromWishlist(item.id)}>삭제</button>
                        </li>
                    ))
                    :
                    <li><p>찜한 상품이 없습니다</p></li>
                    }
                </ul>
            </div>
        </>
    )
}