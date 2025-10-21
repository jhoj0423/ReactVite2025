function Parent02(){
    return (
    <>
        <Welcome name ='길동'/>
        <Welcome name ='나비'/>
        <Welcome name ='홍구'/>
    </>
    )
}

export default Parent02

function Welcome(props){
    return <h1>안녕하세요!{props.name}님</h1>
}

