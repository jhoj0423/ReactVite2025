import MenuItem from "../Pizza/MenuItem"

export default function MenuList(props){
    return(
        <>
            <ul className="MenuList">
                {props.ChkList.map((ChkList)=>(
                    <li key={ChkList.id}>
                        <span><img src={`/menuimgs/${ChkList.title}`} alt={ChkList.name} /></span>
                        <h4>{ChkList.name}</h4>
                        <strong>{ChkList.price}</strong>
                        <button type="button" onClick={()=>props.addMenu(ChkList)}>담기</button>
                    </li>
                ))}
            </ul>
        </>
    )
}

/* {id:1,name:'피자01',title:'pizza01.jpg',price:18000,category:1}, */