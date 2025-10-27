import ProductItem from "./productItem"

export default function ProductList(props){
    return(
        <>
            <ul className="itemList">
                {props.products.map((products)=>(
                    <ProductItem key={products.id} products={products} addItem={props.addItem}/>
                ))}
            </ul>
        </>
    )
}

/* const addItem =(index) =>{
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
    ) */