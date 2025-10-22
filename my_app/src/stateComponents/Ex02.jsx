import React,{useState} from "react";

/* input 의 onChange()함수 이용 */
/* element.target.value =e.target.value => input 입력한 값을 가져올 수 있다.*/

export default function Exstate02(){
    const [txt,SetTxt] = useState('')
    const ChangeText =(e)=>{/* element값을 가지고 와야 됨 */
        SetTxt(e.target.value)
    }
    return(
        <>
            <input type="text" onChange={ChangeText} placeholder="입력하세요"/>
            <h2>내용 : {txt}</h2>
        </>
    )
}