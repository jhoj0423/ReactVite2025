import ExJ06Item from "./productItem";

export default function ExJ06List(props){
    return(
        <>
            <ul className="imgList">
                {props.date.slice(0,20).map((item)=>(
                    <ExJ06Item key={item.id} item={item}/>
                ))}
            </ul>
        </>
    )
}