import React,{useState} from "react";

export default function Changimg02(){
    const [isPhoto,setIsPhoto] = useState(false)
    const [img,setImg] = useState('/images/tree-4.jpg')
    const change =()=>{
        setIsPhoto(!isPhoto)
        if(isPhoto===true){
            setImg('/images/tree-4.jpg')
        }else(
            setImg('/images/tree-5.jpg')
        )
    }
    return(
        <>
            <div>
                <img src={img} alt="이미지" 
                    onMouseEnter={()=>change()}
                    onMouseLeave={()=>change()}
                />
            </div>
        </>
    )
}