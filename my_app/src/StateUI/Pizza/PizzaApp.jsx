import React,{useState} from "react";
import MenuList from "../Pizza/MenuList"
import OrderList from "../Pizza/OrderList"
import PizzaMenu from "../Pizza/PizzaMenu"
import '../Pizza/PizzaApp.css'
/* 얕은 복사는 배열!! */
export default function PizzaApp(){
    /* 메뉴 목록 */
    const Menu = [
        {id:1,name:'피자01',title:'pizza01.jpg',price:18000,category:1,QTY:1},
        {id:2,name:'피자02',title:'pizza02.jpg',price:18000,category:1,QTY:1},
        {id:3,name:'피자03',title:'pizza03.jpg',price:18000,category:1,QTY:1},
        {id:4,name:'피자04',title:'pizza04.jpg',price:18000,category:1,QTY:1},
        {id:5,name:'피자05',title:'pizza05.jpg',price:18000,category:1,QTY:1},
        {id:6,name:'피자06',title:'pizza06.jpg',price:18000,category:1,QTY:1},
        {id:7,name:'피자07',title:'pizza07.jpg',price:18000,category:1,QTY:1},
        {id:8,name:'피자08',title:'pizza08.jpg',price:18000,category:1,QTY:1},
        {id:9,name:'피자09',title:'pizza09.jpg',price:18000,category:1,QTY:1},
        {id:10,name:'피자10',title:'pizza10.jpg',price:18000,category:1,QTY:1},
        {id:11,name:'피자11',title:'pizza11.jpg',price:18000,category:1,QTY:1},
        {id:12,name:'피자12',title:'pizza12.jpg',price:18000,category:1,QTY:1},
        {id:13,name:'사이드1',title:'side01.jpg',price:12000,category:2,QTY:1},
        {id:14,name:'사이드2',title:'side02.jpg',price:12000,category:2,QTY:1},
        {id:15,name:'사이드3',title:'side03.jpg',price:12000,category:2,QTY:1},
        {id:16,name:'사이드4',title:'side04.jpg',price:12000,category:2,QTY:1},
        {id:17,name:'사이드5',title:'side05.jpg',price:12000,category:2,QTY:1},
        {id:18,name:'사이드6',title:'side06.jpg',price:12000,category:2,QTY:1},
        {id:19,name:'사이드7',title:'side07.jpg',price:12000,category:2,QTY:1},
        {id:20,name:'사이드8',title:'side08.jpg',price:12000,category:2,QTY:1},
        {id:21,name:'사이드9',title:'side09.jpg',price:12000,category:2,QTY:1},
        {id:22,name:'사이드10',title:'side10.jpg',price:12000,category:2,QTY:1},
        {id:23,name:'사이드11',title:'side11.jpg',price:12000,category:2,QTY:1},
        {id:24,name:'사이드12',title:'side12.jpg',price:12000,category:2,QTY:1},
        {id:25,name:'드링크1',title:'drink_dessert01.jpg',price:2000,category:3,QTY:1},
        {id:26,name:'드링크2',title:'drink_dessert02.jpg',price:2000,category:3,QTY:1},
        {id:27,name:'드링크3',title:'drink_dessert03.jpg',price:2000,category:3,QTY:1},
        {id:28,name:'드링크4',title:'drink_dessert04.jpg',price:2000,category:3,QTY:1},
        {id:29,name:'드링크5',title:'drink_dessert05.jpg',price:2000,category:3,QTY:1},
        {id:30,name:'드링크6',title:'drink_dessert06.jpg',price:2000,category:3,QTY:1},
        {id:31,name:'드링크7',title:'drink_dessert07.jpg',price:2000,category:3,QTY:1},
        {id:32,name:'드링크8',title:'drink_dessert08.jpg',price:2000,category:3,QTY:1},
        {id:33,name:'드링크9',title:'drink_dessert09.jpg',price:2000,category:3,QTY:1},
        {id:34,name:'드링크10',title:'drink_dessert10.jpg',price:2000,category:3,QTY:1},
        {id:35,name:'드링크11',title:'drink_dessert11.jpg',price:2000,category:3,QTY:1},
        {id:36,name:'드링크12',title:'drink_dessert12.jpg',price:2000,category:3,QTY:1},
    ]
    /* 메뉴종류 버튼 목록 */
    const ListBtn = ['베스트 10','피자','사이드 메뉴','음료 및 디저트']
    /* 누른 버튼 번호 */
    const [num,setNum] = useState(1)
    /* 카테고리별 메뉴 목록 */
    const ChkList = Menu.filter((menu)=>menu.category===num)
    /* 장바구니에 주문한 메뉴가 들어갈 배열 */
    const [order,setOrder]=useState([])
    /* 장바구니 모달 여닫기 */
    const [open,setOpen]=useState(false);//초기 값은 열리지 않음
    /* 결제할 총 금액 */
    const [paymoney,setPaymoney] = useState(0)
    /*  */

    /* 실행 로직 =============================================================================================== */

        /* 장바구니에 메뉴 추가 함수 */
    const addMenu =(ChkList)=>{
        let orderCopy = [...order]

        let findchk = false

        for(let i=0;i<order.length;i++){
            if(ChkList.id===order[i].id){
                /* 수량 증가 코드 구현 */
                orderCopy[i].QTY += 1
                findchk=true
                break;
            }
        }
        console.log('나왔어?')
        /* 장바구니 같은 메뉴 없으니 추가 */
        if(!findchk){
            orderCopy.push({id:ChkList.id,name:ChkList.name,title:ChkList.title,price:ChkList.price,QTY:1})
              console.log('삽입했어?')
              console.log(orderCopy)
        }
        setOrder(orderCopy)
        console.log(setOrder(orderCopy))
        
       
        let moneys=0
        for(let i=0;i<order.length;i++){
            moneys+=order[i].price*order[i].QTY
        }
        console.log(moneys)
        
        setPaymoney(moneys)
        console.log(paymoney)
        console.log(order)
    }

        /* 장바구니의 갯수 조절 함수 */
    const plusBtn =(menu)=>{
        let orderCopy = [...order]
        let find = orderCopy.findIndex((orderCopy)=>orderCopy.id === menu.id)
        if(orderCopy[find].QTY<10){
            orderCopy[find].QTY += 1
        }
        setOrder(orderCopy)

        let moneys=0
        for(let i=0;i<order.length;i++){
            moneys+=order[i].price*order[i].QTY
        }
        setPaymoney(moneys)
        console.log(paymoney)
    }
    const minusBtn =(menu)=>{
        let orderCopy = [...order]
        let find = orderCopy.findIndex((orderCopy)=>orderCopy.id === menu.id)
        if(orderCopy[find].QTY>1){
            orderCopy[find].QTY -= 1
        }
        setOrder(orderCopy)

        let moneys=0
        for(let i=0;i<order.length;i++){
            moneys+=order[i].price*order[i].QTY
        }
        setPaymoney(moneys)
        console.log(paymoney)
    }
        /* 장바구니 메뉴 삭제 버튼 */
    const delBtn = (menu)=>{
        let orderCopy = [...order]
        let find = orderCopy.findIndex((orderCopy)=>orderCopy.id === menu.id)
        orderCopy.splice(find,1)
        setOrder(orderCopy)

        let moneys=0
        for(let i=0;i<order.length-1;i++){
            moneys+=order[i].price*order[i].QTY
        }
        setPaymoney(moneys)
        console.log(paymoney)
    }


        /* 결제 금액 계산 함수 */
    const pay =()=>{
        let moneys=0
        for(let i=0;i<order.length;i++){
            moneys+=order[i].price*order[i].QTY
        }
        setPaymoney(moneys)
        console.log(paymoney)
    }

    return(
        <>
            <div className="PizzaTable">
                <h2>피자가 맛있는 집</h2>
                <PizzaMenu ListBtn={ListBtn} setNum={setNum} open={()=>setOpen(!open)} />
                <MenuList ChkList={ChkList} setOrder={setOrder} addMenu={addMenu} pay={pay}/>
                {!open && <OrderList order={order} paymoney={paymoney} pay={pay} plusBtn={plusBtn} minusBtn={minusBtn} delBtn={delBtn}/>}
                
            </div>
        </>
    )
}