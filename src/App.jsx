import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Checkout from './pages/Checkout'
import Cart from './pages/Cart'
import Page404 from "./pages/Page404"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/events' element={<Page404 />} />
        <Route path='/pricing' element={<Page404 />} />
        <Route path='/company' element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  )
}
