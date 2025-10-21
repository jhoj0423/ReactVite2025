function Ex02(){
    const my = {name:"홍길동",age:"25",hubby:"독서,운동"}
    return(
        <>
            <h1>자기소개</h1>
            <ul style={{color:"#3a97e8ff",listStyle:"none"}}>
                <li>이름:{my.name}</li>
                <li>나이:{my.age}</li>
                <li>취미:{my.hubby}</li>
            </ul>
        </>
    )
}
export default Ex02;