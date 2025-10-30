import React,{useState,useEffect} from "react";

export default function Ex09(){
    const [msg,setMsg] = useState([])
    const [txt,setTxt] = useState('')

    const txtHandeler =(e)=>{
        setTxt(e.target.value)
    }
    const push =()=>{
       
        if(txt.trim()==='')return

        let msgCopy = [...msg]
        msgCopy.push(txt)
        setMsg(msgCopy)

        setTxt('')
        
    }

    useEffect(()=>{
        if(txt.trim()===''){

        }else{
        let lastTxt = msg[msg.length-1]
        console.log(`새 메시지 : ${lastTxt} `)
        }
        const timer = setInterval(() => {
            setMsg([])
        }, 10000);
            
        return ()=>clearInterval(timer)
    },[msg])
    return(
        <>
            <div>
                <h2>간단한 메시지 입력기</h2>
                <input type="text" value={txt} onChange={txtHandeler}/>
                <button type="button" onClick={push}>전송</button>
                <ul>
                    {msg.map((msg,index)=>(
                        <li key={index}>{msg}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}