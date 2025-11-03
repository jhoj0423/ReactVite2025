import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function FakeStoreDetail({data}){
    //const [product,setProduct] = useState(null)
    const [errMsg,setErrMsg] = useState(null)
    const [loading,setLoading] = useState(true)
    const {id} = useParams()
    //현재 useParams()받아온 id 가 props받은 data 같은 id
    //존재하는지 찾아야 한다.
    // 힌트 : find()함수 이용

    const product = data.find((data)=>data.id===Number(id))

    /* useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res)=>{
            if(!res.ok){
                throw new Error(`HTTP error! status: ${res.status}`)
                //throw new Error('djd',res.status); => 인수가 2개
            }
            return res.json()
            })
            .then((data)=>{
            //배열 또는 객체 {} 는 문자열로 바꾸어출력하려고 한다.
            //.tostring() 자바스크립트가 가지고 있는 메서드 객체이다 
            //Array나 Object의 기본 tostring()은 
            //=>[object object] 형태로 호출한다.
                setProduct(data)
                console.log('제이슨으로 받아온 데이터',data)
                console.log(data)
            })
            .catch(()=>{
                setErrMsg(err.message)
            })
            .finally(()=>{
                setLoading(false)
            })
        },[]) */
   /*  const {description,image,price,category,title,rate,rating,id} = useParams() */

    
    

    // ! = NOT = 부정 !product === !==null
    if(!product) return <p>데이터 불러오는 중...</p>

    return(
        <>
            {product !== null && product !== undefined ? (
                <div>
                    <h2>상품 상세 보기</h2>
                    <p>상품페이지 ID : {id}입니다</p>
                    <h4>{product.title}</h4>
                    <span><img src={product.image} alt={`${id}번 상품 이미지`} /></span>
                    <p>카테고리:{product.category}</p>
                    <p>가격:{product.price}</p>
                    <p>평점:{product.rating.rate}</p>
                    <p>{product.description}</p>
                    <button type="button"><Link to='/'>첫 화면으로 이동</Link></button>
                </div>)
                :null
            }
        </>
    )
}