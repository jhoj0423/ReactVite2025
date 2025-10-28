import React,{useState} from "react";

export default function Changimg01(){
    const [isPhoto,setIsPhoto] = useState(false)
    return(
        <>
            <div>
                {isPhoto?<img src="/images/boy.png" alt="남자아이 이미지" />:<img src="/images/girl.png" alt="여자아이 이미지" />}
                <button type="button" onClick={()=>{setIsPhoto(!isPhoto)}}
                >이미지변경</button>
            </div>
        </>
    )
}