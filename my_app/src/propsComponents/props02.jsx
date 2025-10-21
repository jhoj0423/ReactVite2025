function UserCard02(props){
    return(
        <>
            <div style={{border:'1px solid #000',color:'blue',marginBottom:'10px',borderRadius:'5px'}}>
                <h2>이름:{props.name}</h2>
                <p>나이:{props.age}</p>
                <p>도시:{props.city}</p>
            </div>
        </>
    )
}

export default UserCard02;
