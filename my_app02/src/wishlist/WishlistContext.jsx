import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";

//생성자 함수
export const WishListContext = createContext(null)

//Provider=>공급자
export default function WishListProvider({children}){
    const [wishlist,setWishlist] = useState(()=>{
        const saved = localStorage.getItem('wishlist')
        //저장된 value가 있으면 복원, 없으면 빈 배열
        return saved ? JSON.parse(saved) : []
    })
    // 1. LocalStorage 에서 불러오기
    // useEffect 이용해서 작성
    /* useEffect(()=>{
        const saved = localStorage.getItem('wishlist')
        if(saved){
            setWishlist(JSON.parse(saved)) // 상태를 생신
            //useEffect에서는 return 방식은 cleanUp함수 작성 방식이기 때문에 X
        }
    },[]) */

    // 2. wishlist 가 바뀔때 마다 Localstorage에 저장
    useEffect(()=>{
        localStorage.setItem('wishlist',JSON.stringify(wishlist))
    },[wishlist])
    
    const remove =()=>{
        setWishlist([])
        localStorage.removeItem('wishlist')
    }

    const addToWishlist=(item)=>{//찜추가 함수
        let wishListCopy = [...wishlist]

        
            wishListCopy.push(item)
            console.log('여기서 확인')
        
        
        setWishlist(wishListCopy)//업데이트
    }
    const removeFromWishlist =(id) =>{//찜 제거 함수
        let wishListCopy = [...wishlist]
        let finditem = wishListCopy.findIndex((wishListCopy)=>wishListCopy.id===id)
        wishListCopy.splice(finditem,1)
        console.log(finditem,'위시 카피')
        setWishlist(wishListCopy) 
        //setWishlist(wishlist.filter((item)=>item.id !== id))
        

    }

    //isInWishlist : 이미 찜된 항목 확인을 위한 생성하는 함수
    // const isInWishlist = (id) => {
    //      const findItem = wishlist.find((item)=>item.id===id)
    //      if(findItem !== undefind){ return true
    //      }else{return false}
    // }
    
    return(
        <WishListContext.Provider value={{wishlist,setWishlist,addToWishlist,removeFromWishlist,remove}}>
            {children}
        </WishListContext.Provider>
    )
    
}