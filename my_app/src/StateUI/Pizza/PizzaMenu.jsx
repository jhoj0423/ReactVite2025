export default function PizzaMenu(props){
    return(
        <>
            {props.ListBtn.map((item,index)=>(
                <button type="button" key={index} onClick={()=>props.setNum(index)}>{item}</button>
            ))}
            <button type="button" onClick={props.open}>주문 목록</button>
        </>
    )
}