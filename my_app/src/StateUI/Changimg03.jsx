import React,{useState} from "react";

export default function Changimg03(){
    const img =[
        '/images/coffee-blue.jpg',
        '/images/coffee-gray.jpg',
        '/images/coffee-pink.jpg'
    ]
    const [isPhoto,setIsPhoto] = useState(img[0])
    const [num,setNum] = useState(0)
    const chk=()=>{
        setNum((num+1)%img.length)
        setIsPhoto(img[num])
    }
    return(
        <>
            <div>
                <img src={isPhoto} alt="이미지" onClick={chk} style={{border:'10px solid skyblue', borderRadius:'10px'}}/>
            </div>
        </>
    )
}