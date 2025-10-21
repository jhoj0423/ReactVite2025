
function Product(props){
    return(
        <>
        <div>
            <h2>{props.name}</h2>
            <p>가격:{props.price.toLocaleString()}원</p>
        </div>
        </>
    )
}
export default Product
