import { use, useEffect,useState } from "react";
import axios from 'axios'
export default function Test01(){
    const [testData,setTestData] = useState([])
    useEffect(()=>{
        //load라는 비동기 함수를 만들어서
        const load =async()=>{
            try{
                //axios.get()을 이용해 API 호출한다.
                //async() ~~~ await axios.get(URL)
                const res = await axios.get('https://dummyjson.com/products?limit=20')
                console.log(res.data)
                setTestData(res.data)
            }catch(err){
                console.log('상품데이터 호출 실패',err)
            }finally{
                console.log('요청완료')
            }
        }
        load()
    },[])

    return(
        <>
            {testData.products!==null && testData.products !== undefined ? testData.products.map((item)=>(
                <h4 key={item.id}>{item.title}</h4> 
            )):null}
        </>
    )
}