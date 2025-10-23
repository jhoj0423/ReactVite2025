import React,{useState} from "react";
import './TodoApp.css'

export default function TodoApp(){
    const [todolinst,setTodolist] = useState([
        {id:1,text:'React공부하기',completed:false},
        {id:2,text:'운동하기',completed:false},
        {id:3,text:'장보기',completed:false}
    ])
    return(
        <>
            <div className="todoBorde">
                <h1>📝Todo List</h1>
                <TodaItem todolinst={todolinst} />
            </div>
        </>
    )
}

function TodaItem(props){
    <OnToggle ToggleBtn={ToggleBtn} todolinst={props.todolinst}/>
    return(
        <>
            <div>
                {props.todolinst.map((item,index)=>(
                    <button key={index} className="TodoBtn" onClick={ToggleBtn}><p>{item.text}</p></button>
                ))}
            </div>
        </>
    )
}

/* function Todo(props){
    
} */

function OnToggle(props){
    props.ToggleBtn = () =>{

    }
}
