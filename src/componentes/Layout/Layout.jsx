import React from 'react'
import { LayoutCompleto } from './LayoutStyles'
import Navbarr from '../Navbar/Navbar'
import Footer from "../Footer/Footer"
const Layout = ({children}) => {
  return (
    <LayoutCompleto>
      <Navbarr/>
        {children}
      <Footer />
      <address className='mt-2 italic font-semibold'>
        Creado por Lautaro Clerice
      </address>
    </LayoutCompleto>

  )
}

export default Layout