import React,{useState,useEffect} from "react";

export default function Effect08(){
    const [user,setUser] = useState([])
    const [loding,setLodinig] = useState(false)

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(data=>setUser(data))
        
        setTimeout(()=>{
            loding?setLodinig(!loding):''
        },3000)

    },[loding]) // 
    
    return(
        <>
            <div>
                <button type="button" onClick={()=>setLodinig(!loding)}>다시 불러오기</button>
                
                {!loding?<ul>
                    {user.map((user)=>(
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>:<p>로딩중....</p>}
            </div>
        </>
    )   
}

