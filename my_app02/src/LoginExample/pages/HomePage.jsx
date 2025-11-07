import { AuthContext } from "../context/AuthContext"
import { useContext, useState } from "react"
import { useNavigate} from "react-router-dom"
import { Link } from "react-router-dom"

export default function HomePage05(){
    const {user,logout} = useContext(AuthContext)
    const navigate = useNavigate();
    const out =()=>{
        logout()
        navigate('/')
    }
    return(
        <>
            <div>
                <h2>안녕하세요 {user}님</h2>
                <button type="button" onClick={out}>로그아웃</button>
            </div>
        </>
    )
}