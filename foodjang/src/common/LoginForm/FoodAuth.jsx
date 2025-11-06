import { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export const FoodAuth = createContext(null)

export default function FoodAuthProvider({children}){
    const [user,setUser] = useState([
        {userId:'피카츄',pass:'0000'},
        {userId:'라이츄',pass:'1111'},
        {userId:'파이리',pass:'2222'},
    ])
    const [userChk,setUserChk] = useState(null)
    
    

    const login=(userInfo)=>{
           
        let chking = false
        console.log(userInfo,'userInfo')
        for(let i=0;i<user.length;i++){
            if(userInfo.userId === user[i].userId && userInfo.pass === user[i].pass){
                setUserChk(userInfo.userId)
                chking=true
             
                break;
            }
        }
        if(chking===false){
            return alert('입력하신 정보가 잘못 되었습니다')
        }

        
            
        
    }
    const logout = () =>{
        setUserChk(null)
    }

    /* 찜화면 */
    const [wishlist,setWishlist] = useState([])

    const addToWishlist=(item)=>{
        let wishlistCopy = [...wishlist]
        wishlistCopy.push(item)
        setWishlist(wishlistCopy)
    }
    const removeFromWishlist=(id)=>{
        setWishlist(wishlist.filter((wishlist)=>wishlist.id!==id))
    }
    const isInWishlist=(id)=>{

    }

    return(
        <FoodAuth.Provider value={{userChk,login,logout,wishlist,addToWishlist,removeFromWishlist,setWishlist}}>
            {children}
        </FoodAuth.Provider>
    )
    
}