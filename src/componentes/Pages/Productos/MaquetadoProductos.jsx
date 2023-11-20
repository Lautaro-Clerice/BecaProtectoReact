import React from "react"
import { AddCart, CardProduct, ImgCardProd, TittlePrice } from "./ListaProductos"
import { useDispatch } from "react-redux"
import { addToCart } from "./Carrito/CartSlice";
import {Button} from "@nextui-org/react";
import { motion } from 'framer-motion';

export const MaquetadoProducts = ({nombre, desc, precio,img, id}) => {
  const dispatch = useDispatch();

  return (
    <CardProduct>
      <ImgCardProd>
        <img src={img} alt={nombre}/>
      </ImgCardProd>
      <TittlePrice>
        <h1>{nombre}</h1>
        <h2>${precio}</h2>
      </TittlePrice>
      <AddCart>
      <motion.button whileHover={{ scale: 1 }}
      whileTap={{ scale: .97 }}>
        <Button  onClick={() => dispatch(addToCart({nombre, desc, precio,img, id}))} radius="full" color="secondary" className=" text-white shadow-lg btn-carrito">
      Agregar Al carrito
        </Button>
      </motion.button>
      </AddCart>
    </CardProduct>
  )

}