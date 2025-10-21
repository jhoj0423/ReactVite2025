import '../App.css'
function Test13 (){
    const isActive = true;
    return(
        <>
            <div className={isActive===true?'box':'box active'}>
                <p>가가</p>
            </div>
        </>        
    )
}
export default Test13;
