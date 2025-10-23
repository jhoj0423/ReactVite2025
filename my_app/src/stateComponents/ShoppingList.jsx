import React,{useState} from "react";
import './ShoppingList.css'

export default function ShoppingList(){
    const [item,setItem] = useState([
        {id:0,name:'우유',done:false},
        {id:1,name:'계란',done:false},
    ])
    const [inputValue,setInputvalue] = useState('')
    const [Textdeco,setTextdeco] = useState(['none','none'])
    const [end,setEnd] = useState(['구매완료','구매완료'])
    /* 실행 부분 ---------------------------- */
    /* 입력한 제품의 값 */
    const output =(e)=>{
        setInputvalue(e.target.value)
    }
    /* 추가 버튼 클릭시 제품 리스트 추가*/
    const addItem =()=>{
        let itemCopy = [...item]
        let TextdecoCopy = [...Textdeco]
        let endCopy = [...end]
        if(inputValue===''){/* 제품이름을 입력하지 않았을시 */
            return alert('제품의 이름을 입력해주세요')
        }else{
            itemCopy.unshift({id:itemCopy.length,name:inputValue,done:false})
            TextdecoCopy.unshift('none')
            endCopy.unshift('구매완료')
            setItem(itemCopy)
            setTextdeco(TextdecoCopy)
            setEnd(endCopy)
        }
        setInputvalue('')
    }
    const delList = (index) =>{
        let itemCopy = [...item]
        let endCopy = [...end]
        let TextdecoCopy = [...Textdeco]
        itemCopy.splice(index,1)
        endCopy.splice(index,1)
        TextdecoCopy.splice(index,1)
        setItem(itemCopy)
        setTextdeco(TextdecoCopy)
        setEnd(endCopy)
        
    }
    const buyBtn = (index) => {
        let itemCopy = [...item]
        itemCopy[index].done =! itemCopy[index].done
        let TextdecoCopy = [...Textdeco]
        TextdecoCopy[index] = 'line-through'
        let endCopy = [...end]
        endCopy[index] = '취소'
        setItem(itemCopy)
        if(item.done=!false){
            setTextdeco(TextdecoCopy)
            setEnd(endCopy)
        }else{

        }
    }

    return(
        <>
            <div className="myShopping">
                <h1>🛒쇼핑 리스트</h1>
                <div className="addList">
                    <input type="text" placeholder="물건 이름 입력" value={inputValue} onChange={output}/>
                    <button onClick={addItem}>추가</button>
                </div>
                <ul className="itemList">
                    {item.map((list,index)=>(
                        <li key={index} >
                            <span style={{textDecoration:Textdeco[index]}}>{list.name}</span>
                            <button onClick={()=>buyBtn(index)}>{end[index]}</button>
                            <button onClick={()=>delList(index)}>삭제</button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}