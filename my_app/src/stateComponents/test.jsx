import React,{useState} from "react"

export default function Test(){
    const [item, SetItem] = useState([])
    
    const addItem =()=>{
        /* console 의 item 배열에 값이 추가되어도 */
        /* React 입장에서는 item 주소가 바뀌지 않았더고 */
        /* 판단하여 화면을 업데이트 하지 않는다. */
        /* 고로, 리렌더링 하지 않아 화면에는 출력이 되지 않는다. */
        /* item.push(`아이템${item.length+1}`) */
        console.log(`아이템${item}`)
        SetItem([...item,item.push(`아이템${item.length+1}`)])
    }
    return(
        <>  
            {/* <button onClick={()=>{SetItem([...item,`아이템${item.length+1}`])}}>아이템 추가</button> */}
            <button onClick={addItem}>아이템 추가 02</button>
            <ol>
                {item.map((item,index)=>(
                    <li key={index}>아이템{item}</li>
                ))}
            </ol>
        </>
    )
}