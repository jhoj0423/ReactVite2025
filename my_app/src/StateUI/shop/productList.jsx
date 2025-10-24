export default function ProductList(props){
    const addItem =(index) =>{
        let numCopy = [...props.num]
        numCopy[index] += 1
        props.setNum(numCopy)
    }
    return(
        <>
            <ul className="itemList">
                {props.products.map((item,index)=>(
                    <li key={index}>
                        <span>{item.name}-{item.price}</span>
                        <button onClick={()=>addItem(index)}>담기</button>
                    </li>
                ))}
            </ul>
        </>
    )
}