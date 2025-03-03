import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Product from './pages/Product'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/product/:id' element={<Product />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
