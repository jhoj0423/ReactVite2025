// 설치한 react-daum-postcode를 import해야 주소검색 사용가능하다
import DaumPostCode from 'react-daum-postcode'
import { useState } from 'react'
import "../Addr/Postcode.css"

export default function Postcode(){
    const [zipCode, setZipCode] = useState('') // 우편번호
    const [Address,setAddress] = useState('') // 주소
    const [isOpen,setIsOpen] = useState(false)
    const completHandler =(data)=>{
        let arr =''
        if(data.userSelectedType === 'R'){
            arr = data.roadAddress // 도로명 주소
        }else{
            arr = data.jibunAddress; // 지역명 주소
        }
        setZipCode(data.zonecode)
        setAddress(arr)
        setIsOpen(!isOpen)
        
    }
    return(
        <>
            <div>
                <input type="text" value={zipCode} placeholder='우편번호' readonly name='post' id='post' />
                <button type="button" id='userAddSearch' onClick={()=>setIsOpen(!isOpen)}>우편번호 검색</button>
                <input type="text" name="userAddress" id="userAddress" value={Address} placeholder='도로명 주소' />
                <input type="text" name="detailAddress" id="detailAddress" placeholder='상세 주소' />
                {isOpen && 
                <div className="modalBox" style={{position:"fixed",top:'50%',left:'50%',transform:'translate(-50%,-50%)'}}>
                    <button type="button" onClick={()=>setIsOpen(!isOpen)} className='closeBtn'>X</button>
                    <DaumPostCode onComplete={completHandler}/>
                </div>
                }
            </div>
        </>
    )
}