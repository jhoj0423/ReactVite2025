function Ex04(){
    const furitlist = ['사과','바나나','오렌지','포도']
    return(
        <>
           <h1>과일 목록</h1>
           <ul>
                {furitlist.map((item,index)=>(
                    <li key={index}>{item}</li>
                ))}
           </ul>
        </>
    )
}
export default Ex04;