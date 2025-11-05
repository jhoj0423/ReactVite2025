import { useContext } from "react";
import { LoginForm } from "../AuthContext";
import Profile02 from "./profile";
import LoginPage from "./LoginForm";

export default function Header02(){
    const {loginId} = useContext(LoginForm)

    return(
        <>
            <div>
                <h1>context 인증 실습</h1>
                {loginId===null?<LoginPage />:<Profile02 />}
            </div>
        </>
    )
}