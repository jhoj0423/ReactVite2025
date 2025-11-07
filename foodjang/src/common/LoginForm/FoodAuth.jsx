import { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom"

export const FoodAuth = createContext(null)

export default function FoodAuthProvider({children}){
    const [user,setUser] = useState([
        {id:1,userId:'피카츄',pass:'0000'},
        {id:2,userId:'라이츄',pass:'1111'},
        {id:3,userId:'파이리',pass:'2222'},
        {id:4,userId:'1',pass:'11'},
    ])
    const [userChk,setUserChk] = useState(null)
    const navigate = useNavigate()
    

    const login=(userInfo)=>{
           
        let chking = false
        console.log(userInfo,'userInfo')
        for(let i=0;i<user.length;i++){
            if(userInfo.userId === user[i].userId && userInfo.pass === user[i].pass){
                setUserChk(userInfo.userId)
                chking=true
                navigate('/')
                return alert('로그인 성공')
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
    const [wishlist,setWishlist] = useState(()=>{
        const saved = localStorage.getItem('wishlist')
        //저장된 value가 있으면 복원, 없으면 빈 배열
        return saved ? JSON.parse(saved) : []
    })
    useEffect(()=>{
        localStorage.setItem('wishlist',JSON.stringify(wishlist))
    },[wishlist])

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
    const removeAll =()=>{
        setWishlist([])
        localStorage.removeItem('wishlist')
    }

    // 카트 화면
    const [cartlist,setCartlist] = useState(()=>{
        const saved = localStorage.getItem('cartlist')
        //저장된 value가 있으면 복원, 없으면 빈 배열
        return saved ? JSON.parse(saved) : []
    })
    useEffect(()=>{
        localStorage.setItem('cartlist',JSON.stringify(cartlist))
    },[cartlist])

    const addToCartlist =(item)=>{
        if(cartlist.find((cartlist)=>cartlist.id===item.id) === undefined){
            let cartlistCopy = [...cartlist]
            cartlistCopy.push(item)
            setCartlist(cartlistCopy)
        }
    }
    const removeFromCartlist=(id)=>{
        setCartlist(cartlist.filter((cartlist)=>cartlist.id!==id))
    }
    const cartRemoveAll =()=>{
        setCartlist([])
        localStorage.removeItem('cartlist')
    }
    return(
        <FoodAuth.Provider value={{userChk,login,logout,wishlist,addToWishlist,removeAll,removeFromWishlist,setWishlist,cartlist,addToCartlist,setCartlist,user,removeFromCartlist,cartRemoveAll,setUser}}>
            {children}
        </FoodAuth.Provider>
    )
    
}