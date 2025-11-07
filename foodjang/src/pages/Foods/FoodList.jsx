import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "../Foods/FoodList.css"
import { useContext } from "react";
import { FoodAuth } from "../../common/LoginForm/FoodAuth";

export default function FoodList({data}){
    const [Menu,setMenu] = useState(true)
    const [MenuData,setMenuData] = useState(null)
    const  {userChk,login,logout,wishlist,addToWishlist,removeFromWishlist,addToCartlist,cartlist} = useContext(FoodAuth)
    console.log(data)

    const AllBtn =()=>{
        setMenu(true)
        setMenuData(null)
    }
    const BsetBtn =()=>{
        setMenu(false)
        let dataCopy = [...data]
        dataCopy.sort((a,b) => b.rating - a.rating)
        setMenuData(dataCopy)
    }
    const ReviewBtn =()=>{
        setMenu(false)
        let dataCopy = [...data]
        dataCopy.sort((a,b) => a.reviewCount - b.reviewCount)
        setMenuData(dataCopy)
    }

    if(data !==undefined && data !== null){
        return(
            <>
                <div className="Section">
                    <div className="SectionTop">
                        <button type="button" onClick={AllBtn}>전체 메뉴</button>
                        <button type="button" onClick={BsetBtn}>BEST</button>
                        <button type="button" onClick={ReviewBtn}>상품 평순</button>
                    </div>
                    <div className="SectionBottom">
                        <ul>
                            {Menu?data.map((item)=>(
                                <li key={item.id}>
                                    <Link to={`/FoodDetail/${item.id}`} >
                                        <span><img src={item.image} alt={`${item.id}번째 음식`} /></span>
                                        <h4>{item.name}</h4>
                                        <p>평점 : {item.rating}</p>
                                    </Link>
                                    {userChk === null?
                                    ''
                                    :
                                    wishlist.find((wishlist)=>wishlist.id===item.id) === undefined && userChk !== null?
                                    <button type="button" onClick={()=>{addToWishlist(item)}}>🤍찜하기</button>
                                    :
                                    <button type="button" onClick={()=>{removeFromWishlist(item.id)}}>💖찜취소</button>
                                    }
                                    {userChk && <button type="button" className="CartBtn" onClick={()=>{addToCartlist(item)}}>🛒장바구니 담기</button>}
                                </li>
                            )):MenuData.map((item)=>(
                                <li key={item.id}>
                                    <Link to={`/FoodDetail/${item.id}`} >
                                        <span><img src={item.image} alt={`${item.id}번째 음식`} /></span>
                                        <h4>{item.name}</h4>
                                        <p>평점 : {item.rating}</p>
                                    </Link>
                                    {userChk === null?
                                    ''
                                    :
                                    wishlist.find((wishlist)=>wishlist.id===item.id) === undefined && userChk !== null?
                                    <button type="button" onClick={()=>{addToWishlist(item)}}>🤍찜하기</button>
                                    :
                                    <button type="button" onClick={()=>{removeFromWishlist(item.id)}}>💖찜취소</button>
                                    }
                                    {userChk  && <button type="button" className="CartBtn" onClick={()=>{addToCartlist(item)}}>🛒장바구니 담기</button>}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </>
        )
    }else{
        return <p>로딩 중....</p>
    }
    
}