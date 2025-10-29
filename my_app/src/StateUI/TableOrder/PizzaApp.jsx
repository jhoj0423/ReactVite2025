import React,{useState} from "react";
import MenuList from "./MenuList"
import OrderList from "./OrderList"
import PizzaMenu from "./PizzaMenu"
import './PizzaApp.css'
/* 얕은 복사는 배열!! */
export default function PizzaApp(){
    /* 메뉴 목록 */
    const Menu = [
        {id:1,name:'토마토 피자',title:'pizza01.jpg',price:17000,category:1,QTY:1,bestMenu:true},
        {id:2,name:'갈비피자',title:'pizza02.jpg',price:23000,category:1,QTY:1},
        {id:3,name:'올리브피자',title:'pizza03.jpg',price:18000,category:1,QTY:1},
        {id:4,name:'불고기피자',title:'pizza04.jpg',price:20000,category:1,QTY:1,bestMenu:true},
        {id:5,name:'땡초피자',title:'pizza05.jpg',price:18000,category:1,QTY:1},
        {id:6,name:'페페로니땡초피자',title:'pizza06.jpg',price:21000,category:1,QTY:1},
        {id:7,name:'치즈크러스트피자',title:'pizza07.jpg',price:21300,category:1,QTY:1},
        {id:8,name:'화덕페페로니피자',title:'pizza08.jpg',price:24000,category:1,QTY:1,bestMenu:true},
        {id:9,name:'화덕베이컨피자',title:'pizza09.jpg',price:24000,category:1,QTY:1,bestMenu:true},
        {id:10,name:'당근피자',title:'pizza10.jpg',price:18000,category:1,QTY:1},
        {id:11,name:'크림피자',title:'pizza11.jpg',price:18000,category:1,QTY:1},
        {id:12,name:'브로콜리피자',title:'pizza12.jpg',price:18000,category:1,QTY:1},
        {id:13,name:'토마토스파게티',title:'side01.jpg',price:6000,category:2,QTY:1,bestMenu:true},
        {id:14,name:'링귀니',title:'side02.jpg',price:8000,category:2,QTY:1},
        {id:15,name:'해물파스타',title:'side03.jpg',price:9500,category:2,QTY:1},
        {id:16,name:'오일파스타',title:'side04.jpg',price:9000,category:2,QTY:1},
        {id:17,name:'스프',title:'side05.jpg',price:4500,category:2,QTY:1},
        {id:18,name:'감자요리',title:'side06.jpg',price:6500,category:2,QTY:1},
        {id:19,name:'치킨',title:'side07.jpg',price:8000,category:2,QTY:1},
        {id:20,name:'샐러드',title:'side08.jpg',price:6000,category:2,QTY:1},
        {id:21,name:'감자튀김',title:'side09.jpg',price:4000,category:2,QTY:1,bestMenu:true},
        {id:22,name:'연어샐러드',title:'side10.jpg',price:9000,category:2,QTY:1,bestMenu:true},
        {id:23,name:'치킨샐러드',title:'side11.jpg',price:9000,category:2,QTY:1},
        {id:24,name:'무화과샐러드',title:'side12.jpg',price:8000,category:2,QTY:1},
        {id:25,name:'제로콜라',title:'drink_dessert01.jpg',price:1500,category:3,QTY:1,bestMenu:true},
        {id:26,name:'콜라',title:'drink_dessert02.jpg',price:1500,category:3,QTY:1},
        {id:27,name:'오렌지쥬스',title:'drink_dessert03.jpg',price:2000,category:3,QTY:1,bestMenu:true},
        {id:28,name:'자몽에이드',title:'drink_dessert04.jpg',price:3000,category:3,QTY:1},
        {id:29,name:'비트쥬스',title:'drink_dessert05.jpg',price:2500,category:3,QTY:1},
        {id:30,name:'커피',title:'drink_dessert06.jpg',price:2000,category:3,QTY:1},
        {id:31,name:'메론에이드',title:'drink_dessert07.jpg',price:3000,category:3,QTY:1},
        {id:32,name:'카페라떼',title:'drink_dessert08.jpg',price:3000,category:3,QTY:1},
        {id:33,name:'토마토쥬스',title:'drink_dessert09.jpg',price:2000,category:3,QTY:1},
        {id:34,name:'아이스크림',title:'drink_dessert10.jpg',price:1500,category:3,QTY:1,bestMenu:true},
        {id:35,name:'요플레',title:'drink_dessert11.jpg',price:1500,category:3,QTY:1},
        {id:36,name:'컵케이크',title:'drink_dessert12.jpg',price:2000,category:3,QTY:1},
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
    /* 베스트 메뉴 */
    const Bests = Menu.filter((Menu)=>Menu.bestMenu===true)
    /* 주문 완료 모달 여닫기 */
    const [openModal,setOpenModal] = useState(false)
    /* 실행 로직 =============================================================================================== */

        /* 장바구니에 메뉴 추가 함수 */
    const addMenu =(ChkList)=>{
        let orderCopy = [...order]

        let findchk = false//중복 여부 확인용

        for(let i=0;i<orderCopy.length;i++){
            if(ChkList.id===order[i].id){
                /* 수량 증가 코드 구현 */
                /* orderCopy[i].QTY += 1 */
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
        
        //장바구니에 담을시 총가격 계산
        let moneys=0
        for(let i=0;i<orderCopy.length;i++){
            moneys+=orderCopy[i].price*orderCopy[i].QTY
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
        //플러스 버튼 클릭시 총 금액 계산
        let moneys=0
        for(let i=0;i<orderCopy.length;i++){
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

        //마이너스 버튼 클릭시 총 가격 계산
        let moneys=0
        for(let i=0;i<orderCopy.length;i++){
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
        //삭제 버튼 클릭시 총 가격 계산
        let moneys=0
        for(let i=0;i<orderCopy.length;i++){
            moneys+=order[i].price*order[i].QTY
        }
        setPaymoney(moneys)
        console.log(paymoney)
    }


        /* 결제 금액 계산 함수식 */
    /* const pay =()=>{
        let moneys=0
        
        for(let i=0;i<order.length;i++){
            moneys+=order[i].price*order[i].QTY
        }
        setPaymoney(moneys)
    } */

    return(
        <>
            <div className="PizzaTable">
                <h2>🍕피자가 맛있는 집 <span>8</span></h2>
                <PizzaMenu ListBtn={ListBtn} setNum={setNum} open={()=>setOpen(!open)} order={order}/>
                <MenuList ChkList={ChkList} setOrder={setOrder} addMenu={addMenu} num={num} Bests={Bests}/>
                {open && <OrderList order={order} paymoney={paymoney} plusBtn={plusBtn} minusBtn={minusBtn} 
                    delBtn={delBtn} open={()=>setOpen(!open)}
                    orderchk={()=>{setOpenModal(!openModal)}} openModal={openModal} setOpenModal={setOpenModal}
                    modalChk={()=>{setOpen(!open);setOrder([]);setPaymoney(0);setOpenModal(!openModal)}}/>}
                
            </div>
        </>
    )
}