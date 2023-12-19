import React, { useState } from 'react'
import {CategoriasContainer, TituloCategoria } from './CategoriesStyle'
import { Category } from "./Category"
import { ContainerProduct, Productos, productos } from '../ListaProductos'
import { MaquetadoProducts } from '../MaquetadoProductos'
import { categorias } from './Categories'



const Categorias = () => {
  
  const [filtroCategoria, setFiltroCategoria] = useState(null);

  const handleFiltroCategoriaChange = (categoria) => {
    setFiltroCategoria(categoria !== filtroCategoria ? categoria : null);
  };
  
  
  const productosFiltrados = productos.filter(producto => producto.categoria === filtroCategoria);
  const productosFiltradosObjet = Object.entries(Productos).flatMap(([, foods]) =>
  filtroCategoria
    ? foods.filter((food) => food.category === filtroCategoria)
    : foods
);

  return (
    
    <>
    <TituloCategoria>
        <h2>Nuestras Categorias</h2>
    </TituloCategoria>
    <CategoriasContainer>
    {
        categorias.map((category) => {
            return <Category
            key={category.id}
                {...category}
                onCategoriaClick={handleFiltroCategoriaChange}
            />
        })
    }
    </CategoriasContainer>
    <TituloCategoria>
        <h2>Productos</h2>
    </TituloCategoria>
    <ContainerProduct>
    {productosFiltradosObjet.map((producto) => (
        <MaquetadoProducts {...producto} key={producto.id} />
      ))}
    </ContainerProduct>
      </>
  )
}

export default Categorias