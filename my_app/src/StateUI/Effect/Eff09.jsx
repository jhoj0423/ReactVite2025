import React,{useState,useEffect} from "react";

export default function Effect09(){
    const [user,setUser] = useState([])

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res=>res.json())
        .then(data=>setUser(data))
        
        
    },[]) // 
    return(
        <>
            <div>
                <ul>
                    {user.slice(0,5).map((user)=>(
                        <li key={user.id}>{user.title}</li>
                    ))}
                </ul>
            </div>
        </>
    )   
}

