import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Checkout from './pages/Checkout'
import Cart from './pages/Cart'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/cart' element={<Cart />} />
        {/* <Route path='/cart' element={<Cart />} />
        <Route path='/exam' element={<HomePage />} /> */}
      </Routes>
    </BrowserRouter>
  )
}
