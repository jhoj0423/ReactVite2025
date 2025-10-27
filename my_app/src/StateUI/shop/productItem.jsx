export default function ProductItem(props){
    return(
        <>
            <li>
                 <span>{props.products.name}-{props.products.price}</span>
                <button onClick={()=>{props.addItem(props.products)}}>담기</button>
            </li>
        </>
    )
}