
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Navbar from "./components/Navbar.jsx"
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Disclaimer from './pages/Disclaimer.jsx'
import ReturnPolicy from './pages/ReturnPolicy.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import ProductDetail from './pages/ProductDetail.jsx'
import Cart from './pages/Cart.jsx'
import CheckOut from './pages/CheckOut.jsx'
import OrderSuccess from './pages/OrderSuccess.jsx'
import Profile from './pages/Profile.jsx'
import AddProduct from './admin/AddProduct.jsx'
import AdminDashboard from './admin/AdminDashboard.jsx'
import AdminOrders from './admin/AdminOrders.jsx'
import AdminProducts from './admin/AdminProducts.jsx'
import Editproduct from './admin/Editproduct.jsx'
import AdminUsers from './admin/AdminUsers.jsx'
import Shop from './pages/Shop.jsx'




function App() {
  
  return (
   <>
   <BrowserRouter>
  
    <Navbar />
    
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path= "/shop" element= {<Shop />}/>
      <Route path= "/product/:id" element= {<ProductDetail />}/>
      <Route path= "/cart" element= {<Cart />}/>
      <Route path = '/checkout' element={<CheckOut />}/> 
      <Route path= "/login" element= {<Login />}/>
      <Route path= "/register" element= {<Register />}/>
      <Route path= "/profile" element= {<Profile />}/>
      <Route path = '/ordersuccess' element={<OrderSuccess />}/>
      <Route path = '/about' element={<About />}/>
      <Route path = '/disclaimer' element={<Disclaimer />}/>
      <Route path = '/returnpolicy' element={<ReturnPolicy />}/>
      <Route path = '/admin/users' element={<AdminUsers />}/>
      <Route path = '/admin/add-product' element={<AddProduct />}/>
      <Route path = '/admin/dashboard' element={<AdminDashboard />}/>
      <Route path = '/admin/orders' element={<AdminOrders />}/>
      <Route path = '/admin/products' element={<AdminProducts />}/>
      <Route path = '/admin/edit-product/:id' element={<Editproduct />}/>

    </Routes>
   
    < Footer/>
   
   </BrowserRouter>
   </>
  )
}

export default App
