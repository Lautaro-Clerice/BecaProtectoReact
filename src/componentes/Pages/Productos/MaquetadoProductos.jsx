import React from "react"
import { AddCart, CardProduct, ImgCardProd, titlePrice} from "./ListaProductos"
import { useDispatch } from "react-redux"
import { addToCart } from "./Carrito/CartSlice";
import {Button} from "@nextui-org/react";
import { motion } from 'framer-motion';

export const MaquetadoProducts = ({title, desc, price,img, id, category}) => {
  const dispatch = useDispatch();

  return (
    <CardProduct>
      <ImgCardProd>
        <img src={img} alt={title}/>
      </ImgCardProd>
      <titlePrice>
        <h1>{title}</h1>
        <h2>${price}</h2>
      </titlePrice>
      <AddCart>
      <motion.button whileHover={{ scale: 1 }}
      whileTap={{ scale: .97 }}>
        <Button  onClick={() => dispatch(addToCart({title, desc, price,img, id}))} radius="full" color="secondary" className=" text-white shadow-lg btn-carrito">
      Agregar Al carrito
        </Button>
      </motion.button>
      </AddCart>
    </CardProduct>
  )

}