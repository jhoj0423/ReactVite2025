import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserApp from './UserApp'
import ThemeLayout from './ContextAPI/pages/ThemeLayout'
import ThemeProvider from './ThemeContext' // 안에 ThemeContext.Provider 감싸는 형식을 구현하기 위해 import
import AuthProvider from './Context02/AuthContext'
import Header02 from './Context02/components02/Header'
import WishListProvider from './wishlist/WishlistContext'
import ProductList from './wishlist/productList'
import AuthProvider05 from './LoginExample/context/AuthContext'
import LoginPage05 from './LoginExample/pages/LoginPage'
import HomePage05 from './LoginExample/pages/HomePage'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Join from './Addr/join'

function App() {
  

  return (
    <>
      {/* <WishListProvider>
        < ProductList/>
      </WishListProvider> */}
      <BrowserRouter>
        <AuthProvider05>
          <Routes>
            <Route path='/' element={<LoginPage05/>}/>
            <Route path='/Home' element={<HomePage05/>}/>
          </Routes>
        </AuthProvider05>
      </BrowserRouter>
      
      <Join/>
    </>
  )
}

export default App
