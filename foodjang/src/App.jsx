import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './common/Header/Header'
import Footer from './common/Footer/Footer'
import HomePage from './pages/Home/HomePage'
import FoodList from './pages/Foods/FoodList'
import Data from './api/foodData'
import NewList from './pages/New/NewList'
import BestList from './pages/Best/BestList'
import FoodDetail from './pages/Foods/FoodDetail'
import LoginPage from './pages/Login/LoginPage'
import FoodAuthProvider from './common/LoginForm/FoodAuth'
import WishlistPage from './pages/Wishlist/WishlistPage'


function App() {
  
  const data = Data()
  console.log(data.data)
  return (
    <>
      <BrowserRouter>
        <FoodAuthProvider>
            <Header />
          
            <Routes>
                <Route  path='/' element={<HomePage data={data}/>}/>
                <Route  path='/FoodList' element={<FoodList data={data}/>}/>
                <Route  path='/BestList' element={<BestList data={data}/>}/>
                <Route  path='/NewList' element={<NewList data={data}/>}/>
                <Route  path='/FoodDetail/:id' element={<FoodDetail data={data}/>}/>
                <Route  path='/Login' element={<LoginPage data={data}/>}/>
                <Route  path='/Wishlist' element={<WishlistPage data={data}/>}/>
            </Routes>

            <Footer />
        </FoodAuthProvider>
      </BrowserRouter>
    </>
  )
}

export default App
