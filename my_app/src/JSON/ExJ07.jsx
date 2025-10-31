import React,{useState,useEffect} from "react";

export default function ExJ07(){
    const [date,setDate] = useState([])
    // const [topRate,setTopRate]=useState()
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            
            setDate(data)
        })
    },[])

    const changeListRate =()=>{
        let dateCopy = [...date]
        dateCopy.sort((b, a) => b.rating.rate - a.rating.rate);
        console.log(dateCopy);
        setDate(dateCopy)

        /* for(let i=0;i<dateCopy.length;i++){
            console.log(date[i].rating.rate)
            if(dateCopy[i].rating.rate>dateCopy[i+1].rating.rate){
                b=dateCopy[i]
                a=dateCopy[i+1]
                
                dateCopy[i]=a
                dateCopy[i+1]=b   
            }
        } */

    }
    const changeListprice =()=>{
        let dateCopy = [...date]
        dateCopy.sort((a, b) => a.price - b.price);
        console.log(dateCopy);
        setDate(dateCopy)
    }
    const changeListCategory =()=>{
        let dateCopy = [...date]
        dateCopy.sort((a, b) => a.category[0] - b.category[0]);
        console.log(dateCopy.category);
        setDate(dateCopy)
    }

    return(
        <>
            <div>
                <button type="button" onClick={changeListRate}>평점 순으로 정렬</button>
                <button type="button" onClick={changeListprice}>가격 순으로 정렬</button>
                <button type="button" onClick={changeListCategory}>카테고리 순으로 정렬</button>
                <ul style={{listStyle:"none",display:"flex",flexWrap:"wrap"}}>
                    {date.map((item)=>(
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