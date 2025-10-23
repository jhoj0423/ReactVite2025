import React,{useState} from "react";
import './student.css'

export default function ScoreManager(){
    const [studentList,setStudentList] =useState([
        {id:0,name:'파이리',score:70},
        {id:1,name:'꼬부기',score:40},
        {id:2,name:'이상해씨',score:60}
    ])
    const [displays,setDisplays] = useState(['none','none','none'])

    /* 실행 부분 ---------------------------------------------- */

    const plus=(index)=>{
        let studentListCopy = [...studentList]
        if(studentListCopy[index].score>=100){
            return alert('최대값입니다')
        }else{
            studentListCopy[index].score += 10
            setStudentList(studentListCopy)
        }
        if(studentListCopy[index].score>=80){
            let displaysCopy = [...displays]
            displaysCopy[index] = 'inline-block'
            setDisplays(displaysCopy)
        }else{

        }
        
    }
    const minus=(index)=>{
        
        let studentListCopy = [...studentList]

        if(studentListCopy[index].score<=0){
            return alert('최솟값입니다')
        }else{
            studentListCopy[index].score -= 10
            setStudentList(studentListCopy)
        }
        
        if(studentListCopy[index].score<80){
            let displaysCopy = [...displays]
            displaysCopy[index] = 'none'
            setDisplays(displaysCopy)
        }else{

        }
    }
    return(
        <>
            <div className="studentScoreList">
                <h1>학생 점수 관리 시스템</h1>
                <StudentCard studentList={studentList} plus={plus} minus={minus} displays={displays}/>
            </div>
        </>
    )
}

function StudentCard(props){
    return(
        <>
            {props.studentList.map((item,index)=>(
                <div className="students" key={index}>
                    <Student displays02={props.displays[index]} />
                    <h3>{item.name}</h3>
                    <p>점수 : {item.score}점</p>
                    <OnscoreIncrease plus02={()=>props.plus(index)} minus02={()=>props.minus(index)}/>
                </div>
            ))}
        </>
    )
}

function Student(props){
    return(
        <>
            <div className="good" style={{display:props.displays02}}>우수</div>
        </>
    )
}
function OnscoreIncrease(props){
    return(
        <>
            <button onClick={props.plus02}>+10</button>
            <button onClick={props.minus02}>-10</button>
        </>
    )
}
