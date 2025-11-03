import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
export default function ProDetail(){
    //usePatams()
    //URL의 https://localHost:5317/detail/1
    // => 1 받아오는 함수이다.
    //형식 const { 받아올 파라미터 값} = useParams()
    const {id} = useParams()
    return(
        <>
            <div>
                <h1>상세 페이지</h1>
                <p>상품의 ID는 <strong>{id}</strong></p>
                <Link to='/'>상품 목록으로 이동</Link>
            </div>
        </>
    )
}