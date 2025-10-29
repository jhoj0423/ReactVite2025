export default function PizzaMenu(props){
    return(
        <>
            <div className="menuBtns">
                {props.ListBtn.map((item,index)=>(//버튼 생성용 map
                    <button type="button" key={index} onClick={()=>props.setNum(index)}>{item}</button>
                ))}
                <button type="button" onClick={props.open}><span>{props.order.length===0?'':`+${props.order.length}`}</span>주문 목록</button>
            </div>
        </>
    )
}