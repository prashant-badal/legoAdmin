import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Single from '../page/single/Single'

import Login from '../page/login/Login'

import DashBoard from '../page/dashboard/DashBoard'
import Transcation from '../page/transcation/Transcation'
import AddNewProduct from '../page/addnewProduct/AddNewProduct'
import ProductList from '../page/productlist/ProductList'
import CustomerTable from '../page/customertable/CustomerTable'


const AllRoute = () => {
  return (
  <>
  <Routes>

    <Route path="/">
        <Route index element={<DashBoard/>}/>
        <Route  path="login" element={<Login/>}/>
        <Route path="transcation" element={<Transcation/>}/>
        <Route path="addproduct" element={<AddNewProduct/>}/>
        <Route path="product-table" element={<AddNewProduct/>}/>
        <Route path="transcation" element={<Transcation/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="customer-table" element={<CustomerTable/>}/>
        <Route path="product">
    
             <Route index element={<ProductList/>}/>
            <Route path=":userId" element={<Single/>}/>
           
        </Route>
    </Route>
  </Routes>
  
  </>
  )
}

export default AllRoute
