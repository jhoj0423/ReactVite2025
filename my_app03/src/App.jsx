import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
/* import Counter from './ReduxEx/counter' */
import Counter01 from './ReduxTollkit/Counter'
import Cart from './cartEx/Cart'
import Test01 from './test'
import Header from './components/Header'
import Footer from './components/Footer'
import CartPage from './pages/CartPage'
import Section from './pages/Section'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ProductData from './components/productData'

function App() {
  

  return (
    <>
      {<ProductData />}
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path='/' element={<Section/>}/>
            <Route path='/CartPage' element={<CartPage/>}/>
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
