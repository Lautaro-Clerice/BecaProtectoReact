import React from 'react'
import {
    BrowserRouter,
    Routes as ReactDomRoutes,
    Route
} from "react-router-dom"
import Layout from '../Layout/Layout'
import { Contactos } from '../Pages/Contacto/Contacto'
import Home from "../Pages/Home/Home"
import PreguntasFrecuentes from '../Pages/PreguntasFrecuentes/PreguntasFrecuentes'
import Login from '../Pages/Login/Login'
import Register from '../Pages/Register/Register'
import Categorias from '../Pages/Productos/Categorias/Categorias'
const Routes = () => {
  return (
    <>
    <BrowserRouter>
    <Layout>
        <ReactDomRoutes>
            <Route path='/Contacto' element={<Contactos />} />
            <Route path='/' element={<Home />} />
            <Route path='/Productos' element={<Categorias />} />
            <Route path='/Preguntas-Frecuentes' element={<PreguntasFrecuentes />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Register' element={<Register />} />
            <Route path='*' element={<p>error</p>} />
        </ReactDomRoutes>
    </Layout>
    </BrowserRouter>
    </>
  )
}

export default Routes