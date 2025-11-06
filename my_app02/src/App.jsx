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

function App() {
  

  return (
    <>
      <WishListProvider>
        < ProductList/>
      </WishListProvider>
      
    </>
  )
}

export default App
