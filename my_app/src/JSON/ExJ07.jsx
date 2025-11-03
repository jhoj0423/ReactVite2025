import React,{useState,useEffect} from "react";

export default function ExJ07(){
    const [date,setDate] = useState([])
    const [errMsg,setErrMsg] = useState(null)
    const [loading,setLoading] = useState(true)
    const [tabList,setTabList] = useState("men's clothing")
    const tabFilter = date.filter((item) =>item.category===tabList)
    const [tabShow,setTabShow] = useState(false)

    // const [topRate,setTopRate]=useState()
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
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
            setDate(data)
            console.log('제이슨으로 받아온 데이터',data)
        })
        .catch(()=>{
            setErrMsg(err.message)
        })
        .finally(()=>{
            setLoading(false)
        })
    },[])

    const changeListRate =()=>{
        setTabShow(false)
        let dateCopy = [...date]
        dateCopy.sort((a, b) => b.rating.rate - a.rating.rate);
        console.log(dateCopy);
        setDate(dateCopy)
    }
    const changeListprice =()=>{
        setTabShow(false)
        let dateCopy = [...date]
        dateCopy.sort((a, b) => b.price - a.price);
        console.log(dateCopy);
        setDate(dateCopy)
    }
    const changeListCategory1 =()=>{
        setTabShow(true)
        setTabList("men's clothing")        
    }
    const changeListCategory2 =()=>{
        setTabShow(true)
        setTabList("women's clothing")        
    }
    const changeListCategory3 =()=>{
        setTabShow(true)
        setTabList("jewelery")        
    }
    const changeListCategory4 =()=>{
        setTabShow(true)
        setTabList("electronics")        
    }

    return(
        <>
            <div>
                <button type="button" onClick={changeListRate}>평점 순으로 정렬</button>
                <button type="button" onClick={changeListprice}>가격 순으로 정렬</button>
                <button type="button" onClick={changeListCategory1}>맨즈</button>
                <button type="button" onClick={changeListCategory2}>우먼</button>
                <button type="button" onClick={changeListCategory3}>주얼리</button>
                <button type="button" onClick={changeListCategory4}>전자제품</button>
                <ul style={{listStyle:"none",display:"flex",flexWrap:"wrap"}}>
                    {tabShow?tabFilter.map((item)=>(
                        <li key={item.id} style={{border:'1px solid #333',margin:'5px',borderRadius:'10px',padding:'10px'}}>
                            <img src={item.image} alt="제품이미지"  style={{width:'150px',height:'120px'}}/>
                            <p>{item.title.slice(0,6)}</p>
                            <p>{item.rating.rate} ▲</p>
                            <p>{item.price} $</p>
                        </li>
                    )):
                    date.map((item)=>(
                        <li key={item.id} style={{border:'1px solid #333',margin:'5px',borderRadius:'10px',padding:'10px'}}>
                            <img src={item.image} alt="제품이미지"  style={{width:'150px',height:'120px'}}/>
                            <p>{item.title.slice(0,6)}</p>
                            <p>{item.rating.rate} ▲</p>
                            <p>{item.price} $</p>
                        </li>
                    ))}
                </ul> 
            </div>
        </>
    )
}