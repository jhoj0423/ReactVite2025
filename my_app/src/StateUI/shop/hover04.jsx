import React,{useState} from "react";

export default function Hover04(){
    //activeTab = null 이면 이동할 탭 찾을 때 사용
    const[activeTab,setActiveTab] = useState(null)
    const tabs = [
        {id:1, title:'Html', content:'Html은 웹의 구조를 담당한다.' },
        {id:2, title:'CSS', content:'CSS는 스타일을 담당한다' },
        {id:3, title:'JavaScript', content:'JavaScript는 js동작을  담당한다.' }
    ]

    //활성화된 탭의 내용 찾는 코드 필요
    //배열이름.find((요소,인덱스,원본배열)=>(return 조건))
    //조건을 만족하는 첫번쨰 요소를 반환 첫번째 의 값
    //만약 못 찾으면 undefined를 반환한다
    //검색이나 상세보기 ... 
    let contentTenxt = '탭 위에 마우스를 올려보세요' //기본 텍스트

    if(activeTab !== null){
        //activeTab과 같은 id를 가진 탭을 찾아야 함
        //결론 findTab =1 ,=2, =3
        const findTab = tabs.find((item)=>item.id === activeTab)
        //탭을 찾았으면 그탭의 내용(content)를 변경
        console.log('여기까지')
        console.log(findTab)
        if(findTab){
            console.log('여기까지')
            console.log(findTab)
            contentTenxt=findTab.content
            console.log(contentTenxt)
        }
    }

    return(
        <>
            <div style={{width:'400px',margin:'50px auto'}}></div>
            <h2>Hover Tab Menu</h2>
            <div style={{display:"flex",justifyContent:"space-around"}}>
                {tabs.map((item)=>(
                    <div key={item.id} 
                        onMouseEnter={()=>setActiveTab(item.id)} // 마우스 화성화
                        onMouseLeave={()=>setActiveTab(null)}   //마우스 비활성화
                        style={{cursor:'pointer'}}
                    >{item.title}</div>
                ))}
            </div>
            <div style={{marginTop:'20px',padding:'15px',backgroundColor:'#ccc',borderRadius:'5px',height:'50px'}}>{contentTenxt}</div>
        </>
    )
}