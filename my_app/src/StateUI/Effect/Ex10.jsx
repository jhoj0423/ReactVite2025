import React,{useState,useEffect} from "react";

export default function Ex10(){
    //내가 필터링 한 목록을 담아줄 상태변수
    const [filterList,setFilterList] = useState([])

    const [inputValue,setInputValue] = useState('')
    const users = [
        { id: 1, name: 'Alice', email: 'alice@example.com' },
        { id: 2, name: 'Bob', email: 'bob@example.com' },
        { id: 3, name: 'Charlie', email: 'charlie@example.com' },
        { id: 4, name: 'David', email: 'david@example.com' },
    ]
    const inputHandeler =(e)=>{
        setInputValue(e.target.value)
    }

    useEffect(()=>{
       
        const newArr = users.filter((users)=>users.name.toLowerCase().includes(inputValue.toLocaleLowerCase()) 
                                    || users.email.toLowerCase().includes(inputValue.toLocaleLowerCase()))
        if(!inputValue.trim()){
            setFilterList(users) 
            return
        }
        setFilterList(newArr)
        
    },[inputValue])

    return(
        <>
            <div>
                <h1>간단한 사용자 검색</h1>
                <input type="text" value={inputValue} placeholder="이름 또는 이메일 검색" onChange={inputHandeler} />
                <ul style={{listStyle:'none',padding:0}}>
                    {filterList.length!==0?filterList.map((user,index)=>(
                        <li key={index}>{user.name}{`(${user.email})`}</li>
                    )):<li>검색 결과가 없습니다</li>}
                </ul>
            </div>
        </>
    )
}