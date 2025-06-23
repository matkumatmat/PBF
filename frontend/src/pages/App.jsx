import { useState } from 'react'
import '../index.css'
import Allheader from '../components/allheader.jsx'
import DashboardMobile from './dashboard.jsx'
import ProductInfo from './product_info.jsx'
import Stocks from './Stocks.jsx'
import Packing from './packing.jsx'
import Dokumentasi from './dokumentasi.jsx'
import MobileMenu from '../components/mobilemenu.jsx'


function App() {

  return (
    <>
    <div>
      <Allheader></Allheader>
      <MobileMenu />
      <DashboardMobile />
      <ProductInfo />
      <Stocks />
      <Packing />
      <Dokumentasi />
    </div>
    </>
  )
}

export default App
