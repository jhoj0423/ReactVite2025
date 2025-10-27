export default function FoodList(props){
    return(
        <>
            <div>
                <ul style={{listStyle:'none',margin:0,padding:0}} >
                    {props.foods.map((foods)=>(
                        <li key={foods.id} style={{textAlign:'left',position:'relative',borderBottom:'2px solid #fdb857ff',padding:'20px',fontWeight:'bold',width:'300px'}}>
                            <span>{foods.name}: {foods.price}</span>
                            <button type="button" onClick={()=>props.OrderMenu(foods)} style={{position:'absolute',top:'50%',right:'15px',transform:'translateY(-50%)'}}>담기</button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}