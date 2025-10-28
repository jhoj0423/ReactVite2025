import React,{useState} from "react";

export default function Changimg04(){
    // category:1, category:2 => category별 이미지를 탭메뉴 출력
    // 조건에 만족하는 값을 하나가 아니라 여러개 배열로 추출하는 함수
    // => 배열이름.filter((요소, 인덱스, 원본배열)=>(return 조건))
    // 조건에 만족하지 않으면 빈 배열 []반환한다.
    // imgs.filter((img)=> 조건입력)=> 조건에 만족 [{id:1},{id:2},{id:3},{id:4},])
    const imgs = [
        {id:1,name:'pic-1.jpg',category:1},
        {id:2,name:'pic-2.jpg',category:1},
        {id:3,name:'pic-3.jpg',category:1},
        {id:4,name:'pic-4.jpg',category:1},
        {id:5,name:'tree-1.jpg',category:2},
        {id:6,name:'tree-2.jpg',category:2},
        {id:7,name:'tree-3.jpg',category:2},
        {id:8,name:'tree-4.jpg',category:2},
    ];
    /* imgs.filter((img)=> {category===1}) */

    const [num,setNum] = useState(1)
    const photo = imgs.filter((imgs)=>imgs.category===num)

    
    return(
        <>
            <div>
                <h2>이미지 탭 전환 예제</h2>
                <button type="button" onClick={()=>setNum(1)}>배경</button>
                <button type="button" onClick={()=>setNum(2)}>나무</button>
                <div className="list">
                    {photo.map((item)=>(
                        <img src={`/images/${item.name}`} alt={item.name} key={item.id} />
                    ))}
                </div>
            </div>
        </>
    )
}