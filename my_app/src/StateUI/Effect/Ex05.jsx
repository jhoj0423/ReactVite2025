import React,{useState,useEffect} from "react";

export default function Ex05(){
    const [titleName,setTitleName] = useState('')
    const ChangeTitle =(e)=>{
        setTitleName(e.target.value)
    }
    useEffect(()=>{
        if(titleName.trim() === ''){
            document.title="제목 입력"
        }else{
            document.title = titleName
        }
        
    },[titleName])

    return(
        <>
            <div>
                <h1>Dynamic Title Generator</h1>
                <input type="text" value={titleName} placeholder="브라우저 탭 제목을 입력하세요" onChange={ChangeTitle}/>
                <p>입력한 내용이 실시간으로 브라우저 탭 제목에 반영됩니다!</p>
            </div>
        </>
    )
}