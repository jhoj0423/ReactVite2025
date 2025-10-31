import React,{useState,useEffect} from "react";

export default function ExJ02(){
    const  [date,setDate] = useState([])
    const [errMsg,setErrMsg] = useState('')
    const [loading,setoading] = useState(true)
    useEffect(()=>{
        console.log('데이터 요청 시작')
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>{
            if(!res.ok){
                throw new Error('HTTP error! status'+err.message)
            }

            return res.json()
        })
        .then((data)=>{
            console.log('받은 데이터',data)
            setDate(data)
        })

        .catch((err)=>{
            console.log(err)
            setErrMsg(err)
        })

        .finally(()=>{
            console.log('데이터 요청 완료')
            setoading(false)
        })
    },[])

    const titleHandeler =(post)=>{
        alert(post.body)
    }

    return(
        <>
            <div>
                <h2>게시글 5개</h2>
                <ul>
                    {date.slice(0,5).map((post)=>(
                        <li key={post.id} style={{cursor:'pointer'}} onClick={()=>titleHandeler(post)}>
                            {post.title}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}