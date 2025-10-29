import React,{useState,useEffect} from "react";

export default function Effect09(){
    const [user,setUser] = useState([])

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res=>res.json())
        .then(data=>setUser(data))
        
        let userCopy =[...user]
        userCopy.slice(0,5)
        setUser(userCopy)
    },[]) // 
    
    return(
        <>
            <div>
                <ul>
                    {user.map((user)=>(
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
            </div>
        </>
    )   
}

