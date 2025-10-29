import { useState } from 'react'
/* src -> assets -> 이미지 파일은 반드시 import 한다. */
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
/* import는 외부파일을 가져온다. */
import './App.css'
/* function App(){} => react 에서 App()는 컴포넌트라 부른다. */
/* public 폴더의 이미지 파일은 import 아지 않아도 사용가능하다. */
import image01 from '../public/images/image01.png'
/* React는 이미지를 하나하나 import해서 개별로 가져올 수 있다. */
import Ex04 from './components/Ex04'
import Ex05 from './components/Ex05'
import Ex06 from './components/Ex06'
import Ex07 from './components/Ex07'
import Ex08 from './components/Ex08'
import Ex09 from './components/Ex09'
import Ex010 from './components/Ex10'
import Ex011 from './components/Ex11'
import Ex012 from './components/Ex12'
import Ex013 from './components/Ex13'
import Parent from './propsComponents/parent'
import Child from './propsComponents/child'
import Parent02 from './propsComponents/wecome'
import Parent03 from './propsComponents/profile'
import Parent04 from './propsComponents/prEx'
import Welcome from './propsComponents/props01'
import UserCard02 from './propsComponents/props02'
import Product from './propsComponents/props03'
import Counter01 from './propsComponents/stateCount'
import Counter02 from './propsComponents/stateCount02'
import Alert from './propsComponents/props06'
import Exstate01 from './stateComponents/Ex01'
import Exstate02 from './stateComponents/Ex02'
import Exstate03 from './stateComponents/Ex03'
import Exstate04 from './stateComponents/Ex04'
import Exstate05 from './stateComponents/Ex05'
import Exstate06 from './stateComponents/Ex06'
import Exstate07 from './stateComponents/Ex07'
import Exstate08 from './stateComponents/Ex08'
import Exstate09 from './stateComponents/Ex09'
import Exstate10 from './stateComponents/Ex10'
import Exstate11 from './stateComponents/Ex11'
import Exstate13 from './stateComponents/Ex13'
import Exstate14 from './stateComponents/Ex14'
import Exstate15 from './stateComponents/Ex15'
import Exstate16 from './stateComponents/Ex16'
import Exstate17 from './stateComponents/Ex17'
import Exstate18 from './stateComponents/Ex18'
import Test from './stateComponents/test'
import Blog from './stateComponents/Blog'
import MovieReview01 from './stateComponents/MovieReview'
import ShoppingList from './stateComponents/ShoppingList'
import CommentBoard from './stateComponents/CommentBoard'
import ScoreManager from './stateComponents/student'
import TodoApp from './stateComponents/TodoApp'
import ModalChange from './StateUI/uiTest'
import LoginView from './StateUI/UiTest02'
import PromptChange from './StateUI/UiTest03'
import UiParent04 from './StateUI/UiTest04'
import AuthApp from './StateUI/member/AuthApp'
import MovieApp from './StateUI/movie/MovieApp'
import ShopApp from './StateUI/shop/shopApp'
import BlogC from './stateComponents/Blog/blogc'
import NewMovieApp from './StateUI/NewMovie/MovieApp'
import FoodApp from './StateUI/food/foodApp'
import Hover01 from './StateUI/shop/hover01'
import Hover02 from './StateUI/shop/hover02'
import Hover03 from './StateUI/shop/hover03'
import Hover04 from './StateUI/shop/hover04'
import Changimg01 from './StateUI/Changimg01'
import Changimg02 from './StateUI/Changimg02'
import Changimg03 from './StateUI/Changimg03'
import Changimg04 from './StateUI/Changimg04'
import PizzaApp from './StateUI/TableOrder/PizzaApp'
import Effect01 from './StateUI/Effect/Eff01'
import Effect02 from './StateUI/Effect/Eff02'
import Effect03 from './StateUI/Effect/Eff03'
import Effect05 from './StateUI/Effect/Eff05'
import Effect06 from './StateUI/Effect/Eff06'
import Effect08 from './StateUI/Effect/Eff08'
import Effect09 from './StateUI/Effect/Eff09'
/* UserCard() 함수 생성 하기 */
/* UserCard() 컴포넌트를 App()컴포넌트의 자식으로 사용할 예정 */
/* 컴포넌트와 컴포넌트 사이의 데이터 이동이 가능하다. */
/* 부모에서 -> 자식만 매개변수 보낼 수 있다. */

function UserCard(props)/* ({name,age}) 중괄호 안에 그럼 props 안써도 됨 */ {
  return (
    <>
      <div style={{border:'1px solid #ddd', padding:'5px 15px',margin:'10px', borderRadius:'8px'}}>
        <h2>{props.name}</h2>
        <h2>{props.age}</h2>
      </div>
    </>
  )
}


function App() {
/* 리액트는 반드시 return() 안에서 실행할 HTML 문서를 작성한다. */
  const name = '홍길동';
  const isLoggin = true;
  /* true, false 는 논리값이지 문자가 아님 */
  const furits =['사과','바나나','복숭아']
  const user = {name:'짱구',age:'5',email:'buriburi@naver.com'}
  const chkBtn = () => {
    console.log('버튼 클릭')
  }
  const products = [{id:1,name:"노트북",price:1200000},{id:2,name:"마우스",price:30000},{id:3,name:"키보드",price:80000}]

  
  return (
    /* <></>는 프레그먼트로 리액트는 HTML 작성시 */
    /* 반드시 부모태그가 하나만 존재해야 하므로 */
    /* 비어있는 태그를 사용하도록 허용한 기술이다. */
    /* React는 반드시 닫는 태그 존재하야 함 : <hr/> */
    <>
    {/* 문제 : name:'홍길동'정의 후 <h1>태그에 출력하기 */}
      {/* <div style={{backgroundColor:'skyblue',padding:'20px',borderRadius:'10px',fontWeight:'600',color:'#fff'}}> */}
        {/* javaScript의 class를 React는 className로 사용 */}
        {/* React에서 변수의 값을 사용하려면 반드시 {변수이름 입력} */}
        {/* <h1>{name}</h1>
        {<img src={reactLogo} alt="sample randem img" />}
        <p>{isLoggin===true?"환영 합니다.":"로그인 하세요"}</p>
        <ul> */}
          {/* {furits.map((item,index)=>())}:  */}
         {/*  {furits.map((item,index)=>(
            <li key ={index}>{item}</li>
          ))} */}
       {/*  </ul>
        <ol>
          <li>{user.name}</li>
          <li>{user.age}</li>
          <li>{user.email}</li>
        </ol> */}
        {/* <p>스타일 적용된 함수</p> */}
        {/* <button type="button" onClick={chkBtn}>★</button> */}
      {/* </div> */}
      {/* UserCard 안에 name 과 age은 매개변수이다 */}
      {/* <UserCard name='타마마' age={15}/>
      <UserCard name='케로로' age={30}/>
      <UserCard name='쿠루루' age={40}/> */}
      {/* <div>
        <ul style={{listStyle:'none'}}>{products.map((item,index)=>(
          <li style={{
            border:'3px solid #333',
            padding:'10px',
            marginBottom:'10px',
            borderRadius:'10px',
            backgroundColor:'yellowgreen',
            fontWeight:'bold'
          }} key={item.id}>
            {item.name}<br></br>가격:{item.price.toLocaleString()}원
          </li>
        ))}</ul>
      </div> */}
      {/* <Welcome name='개나리' />
      <UserCard02 name='개나리' age='18' city='서울'/>
      <UserCard02 name='도미닉' age='68' city='경기'/>
      <UserCard02 name='로타리' age='29' city='인천'/>
      <Product name='노트북' price={120000}/>
      <Product name='마우스' price={15000}/> */}
      {/* <Counter02 /> */}
      {/* <Alert type='error' msg='오류'/>
      <Alert type='success' msg='성공'/>
      <Alert type='info' msg='정보'/>
      <Alert type='warring' msg='경고'/> */}
      
      <Effect09 />
      

    </>
  )
}
/* export는 App컴포넌ㅌ르르 밖으로 내보낸다 */
export default App
