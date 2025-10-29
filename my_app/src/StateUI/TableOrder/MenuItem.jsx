export default function MenuItem(props){
    return(
        <>
            {props.Bests.map((ChkList)=>(
                    <li key={ChkList.id}>
                        <span><img src={`/tableImg/${ChkList.title}`} alt={ChkList.name} /></span>
                        <h4>{ChkList.name}</h4>
                        <strong>{ChkList.price.toLocaleString()}원</strong>
                        <button type="button" onClick={()=>props.addMenu(ChkList)}>담기</button>
                    </li>
                ))}
        </>
    )
}