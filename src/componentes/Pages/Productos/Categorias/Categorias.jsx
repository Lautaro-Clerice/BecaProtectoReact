import React, { useState } from 'react'
import {CategoriasContainer, TituloCategoria } from './CategoriesStyle'
import { Category } from "./Category"
import { ContainerProduct, Productos, productos } from '../ListaProductos'
import { MaquetadoProducts } from '../MaquetadoProductos'
import { categorias } from './Categories'
import IconoCart from '../Carrito/IconoCart'


const Categorias = () => {
  const [hiddenCart, setHiddenCart] = useState(true);
  return (
    
    <>
    <TituloCategoria>
        <h2>Nuestras Categorias</h2>
        <IconoCart hiddenCart = {hiddenCart} setHiddenCart={setHiddenCart}/>
    </TituloCategoria>
    <CategoriasContainer>
    {
        categorias.map((category) => {
            return <Category
            key={category.id}
                {...category}
            />
        })
    }
    </CategoriasContainer>
    <TituloCategoria>
        <h2>Productos</h2>
    </TituloCategoria>
    <ContainerProduct>
      {
      Object.entries(Productos).map(([, foods]) => {
        return foods.map((food) => {
          return <MaquetadoProducts {...food} key={food.id} />;
        })
      })
      }
    </ContainerProduct>
      </>
  )
}

export default Categorias