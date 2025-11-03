import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import '../Recipes/Recip.css'

export default function RecipList({Menu}){
    const [food,setFood] = useState([])
    const [chking,setChking] = useState(true)
    const [tabList,setTabList] = useState('Korean')
    const tabFilter = Menu.filter((item)=>item.cuisine===tabList)
    
    
    console.log(Menu)
    console.log('여기 까지 확인용')


    
    
    const AllTabBtn =()=>{
        setChking(false)
        setFood(Menu)
        console.log(food)
    }
    const ratingTabBtn =()=>{
        setChking(false)
        let MenuCopy = [...Menu]
        MenuCopy.sort((a,b) => b.rating - a.rating);
        setFood(MenuCopy)
        console.log(food)
    }
    const TabBtn=(num)=>{
        setChking(false)
        let MenuCopy = [...Menu]
        if(num===1){
            let tagMenu = MenuCopy.filter((MenuCopy)=>MenuCopy.cuisine==='American')
            setFood(tagMenu)
        }
        else if(num===2){
            let tagMenu = MenuCopy.filter((MenuCopy)=>MenuCopy.cuisine==='Asian')
            setFood(tagMenu)
            console.log('여기까지를 확인')
        }
        else if(num===3){
            let tagMenu = MenuCopy.filter((MenuCopy)=>MenuCopy.cuisine==='Brazilian')
            setFood(tagMenu)
        }
        else if(num===4){
            let tagMenu = MenuCopy.filter((MenuCopy)=>MenuCopy.cuisine==='Greek')
            setFood(tagMenu)
        }
        else if(num===5){
            let tagMenu = MenuCopy.filter((MenuCopy)=>MenuCopy.cuisine==='Indian')
            setFood(tagMenu)
        }
        else if(num===6){
            let tagMenu = MenuCopy.filter((MenuCopy)=>MenuCopy.cuisine==='Italian')
            setFood(tagMenu)
        }
        else if(num===7){
            let tagMenu = MenuCopy.filter((MenuCopy)=>MenuCopy.cuisine==='Lebanese')
            setFood(tagMenu)
        }
        else if(num===8){
            let tagMenu = MenuCopy.filter((MenuCopy)=>MenuCopy.cuisine==='Mediterranean')
            setFood(tagMenu)
        }
        else if(num===9){
            let tagMenu = MenuCopy.filter((MenuCopy)=>MenuCopy.cuisine==='Mexican')
            setFood(tagMenu)
        }
        else if(num===10){
            let tagMenu = MenuCopy.filter((MenuCopy)=>MenuCopy.cuisine==='Moroccan')
            setFood(tagMenu)
        }
        else if(num===11){
            let tagMenu = MenuCopy.filter((MenuCopy)=>MenuCopy.cuisine==='Japanese')
            setFood(tagMenu)
        }
        else if(num===12){
            let tagMenu = MenuCopy.filter((MenuCopy)=>MenuCopy.cuisine==='Korean')
            setFood(tagMenu)
        }
        else if(num===13){
            let tagMenu = MenuCopy.filter((MenuCopy)=>MenuCopy.cuisine==='Pakistani')
            setFood(tagMenu)
        }
        else if(num===14){
            let tagMenu = MenuCopy.filter((MenuCopy)=>MenuCopy.cuisine==='Russian')
            setFood(tagMenu)
        }
        else if(num===15){
            let tagMenu = MenuCopy.filter((MenuCopy)=>MenuCopy.cuisine==='Smoothie')
            setFood(tagMenu)
        }
        else if(num===16){
            let tagMenu = MenuCopy.filter((MenuCopy)=>MenuCopy.cuisine==='Thai')
            setFood(tagMenu)
        }
        else if(num===17){
            let tagMenu = MenuCopy.filter((MenuCopy)=>MenuCopy.cuisine==='Turkish')
            setFood(tagMenu)
        }
    }
    const GoodBtn = () => {
        setChking(false)
    }

    if(food !== null && food !== undefined){
        return(
            <>
                {chking?
                    <div>
                        <h1>레시피 목록</h1>
                        <div>
                            <button type="button" onClick={AllTabBtn}>All</button>
                            <button type="button" onClick={ratingTabBtn}>Rating정렬</button>
                            <button type="button" onClick={()=>TabBtn(1)}>American</button>
                            <button type="button" onClick={()=>TabBtn(2)}>Asian</button>
                            <button type="button" onClick={()=>TabBtn(3)}>Brazilian</button>
                            <button type="button" onClick={()=>TabBtn(4)}>Greek</button>
                            <button type="button" onClick={()=>TabBtn(5)}>Indian</button>
                            <button type="button" onClick={()=>TabBtn(6)}>Italian</button>
                            <button type="button" onClick={()=>TabBtn(7)}>Lebanese</button>
                            <button type="button" onClick={()=>TabBtn(8)}>Mediterranean</button>
                            <button type="button" onClick={()=>TabBtn(9)}>Mexican</button>
                            <button type="button" onClick={()=>TabBtn(10)}>Moroccan</button>
                            <button type="button" onClick={()=>TabBtn(11)}>japanese</button>
                            <button type="button" onClick={()=>TabBtn(12)}>Korean</button>
                            <button type="button" onClick={()=>TabBtn(13)}>pakistani</button>
                            <button type="button" onClick={()=>TabBtn(14)}>Russian</button>
                            <button type="button" onClick={()=>TabBtn(15)}>Smoothie</button>
                            <button type="button" onClick={()=>TabBtn(16)}>Thai</button>
                            <button type="button" onClick={()=>TabBtn(17)}>Turkish</button>
                        </div>
                        <ul className="RecipList">
                            {Menu.map((item)=>(
                                <Link to={`/detail/${item.id}`} key={item.id}>
                                    <li >
                                        <span><img src={item.image} alt="" /></span>
                                        <strong>{item.name.slice(0,20)}</strong>
                                        <p>요리 유형:{item.tags[0]}</p>
                                        <p>평점 :{item.rating}</p>
                                        <button type="button" onClick={GoodBtn}>❤좋아요</button>
                                    </li>
                                </Link>
                            ))}
                        </ul>
                    </div>:
                    <div>
                        <h1>레시피 목록</h1>
                        <div>
                            <button type="button" onClick={AllTabBtn}>All</button>
                            <button type="button" onClick={ratingTabBtn}>Rating정렬</button>
                            <button type="button" onClick={()=>TabBtn(1)}>American</button>
                            <button type="button" onClick={()=>TabBtn(2)}>Asian</button>
                            <button type="button" onClick={()=>TabBtn(3)}>Brazilian</button>
                            <button type="button" onClick={()=>TabBtn(4)}>Greek</button>
                            <button type="button" onClick={()=>TabBtn(5)}>Indian</button>
                            <button type="button" onClick={()=>TabBtn(6)}>Italian</button>
                            <button type="button" onClick={()=>TabBtn(7)}>Lebanese</button>
                            <button type="button" onClick={()=>TabBtn(8)}>Mediterranean</button>
                            <button type="button" onClick={()=>TabBtn(9)}>Mexican</button>
                            <button type="button" onClick={()=>TabBtn(10)}>Moroccan</button>
                            <button type="button" onClick={()=>TabBtn(11)}>japanese</button>
                            <button type="button" onClick={()=>TabBtn(12)}>Korean</button>
                            <button type="button" onClick={()=>TabBtn(13)}>pakistani</button>
                            <button type="button" onClick={()=>TabBtn(14)}>Russian</button>
                            <button type="button" onClick={()=>TabBtn(15)}>Smoothie</button>
                            <button type="button" onClick={()=>TabBtn(16)}>Thai</button>
                            <button type="button" onClick={()=>TabBtn(17)}>Turkish</button>
                        </div>
                        <ul className="RecipList">
                            {food.map((item)=>(
                                <Link to={`/detail/${item.id}`} key={item.id}>
                                    <li >
                                        <span><img src={item.image} alt="" /></span>
                                        <strong>{item.name.slice(0,15)}</strong>
                                        <p>요리 유형:{item.tags[0]}</p>
                                        <p>평점 :{item.rating}</p>
                                        <button type="button">❤좋아요</button>
                                    </li>
                                </Link>
                            ))}
                        </ul>
                    </div>
                }
            </>
        )
    }
}