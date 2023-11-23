import React, { useState } from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { IconoCartContainer, LinkCarrito } from './IconoCartStyles';
import { CarritoContainer, CarritoPadre, ContainerPrice, NavbarConteiner, ProductCartPadre, ShippingCostStyle, SubtotalStyle, TittleCart,TotalStyle} from '../Categorias/CategoriesStyle';
import ModalCart from '../Categorias/ModalCart';
import { SHIPPING_COST } from './Constant';
import { FaTrash } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from './CartSlice';
import { IoMdMenu } from 'react-icons/io';

import { AnimatePresence } from 'framer-motion';
import { Button, ScrollShadow, Tooltip } from '@nextui-org/react';
export const IconoCart = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const {cartItems} = useSelector(state => state.cart)
  const subtotalPrice = cartItems.reduce((acc, item) => {
      return (acc += (item.precio * item.quantity))
  },0)
  const totalCartItem = useSelector(state => state.cart.cartItems).reduce((acc,item) => (
    acc += item.quantity
  ), 0)

  return (
   <>

    <NavbarConteiner>
    <IconoCartContainer>
        <LinkCarrito>
            <FaCartShopping className='iconBag' onClick={() => setIsOpen(!isOpen)}/>
            <span>{totalCartItem}</span>
        </LinkCarrito>
    </IconoCartContainer>
    <AnimatePresence>
    <CarritoPadre className={isOpen ? 'open' : ''}>
      <CarritoContainer>
      <IoMdMenu className="menu" onClick={() => setIsOpen(false)} />
        <TittleCart>
          <h2>Tus productos</h2>
        </TittleCart>
        <hr />
        <ScrollShadow hideScrollBar className="w-[300px] h-[300px]">
        <ProductCartPadre>
          {
            cartItems.length ? (
            cartItems.map((item) => (
              <ModalCart {...item} key={item.id} />
            ))
          ) : (
            <p>No tienes productos en el carrito</p>
          )
          }
          
        </ProductCartPadre>
        </ScrollShadow>
        <Tooltip 
      content="Eliminar todo"
      delay={0}
      closeDelay={0}
      motionProps={{
        variants: {
          exit: {
            opacity: 0,
            transition: {
              duration: 0.1,
              ease: "easeIn",
            }
          },
          enter: {
            opacity: 1,
            transition: {
              duration: 0.15,
              ease: "easeOut",
            }
          },
        },
      }}
    >
        <Button variant="flat" > <FaTrash className="FcFullTrash" onClick={() => dispatch(clearCart())} disabled={!cartItems.length} /></Button>
    </Tooltip>
        <ContainerPrice>
          <SubtotalStyle>
            <h3>Subtotal</h3>
            <h3>${subtotalPrice}</h3>
          </SubtotalStyle>
          <ShippingCostStyle>
            <h3>Envio</h3>
            <h3>$
            {!cartItems.length ? 0 : SHIPPING_COST}
            </h3>
          </ShippingCostStyle>
          <hr/>
          <TotalStyle>
            <h3>Total</h3>
            <h3>${!cartItems.length ? 0 : subtotalPrice + SHIPPING_COST}</h3>
          </TotalStyle>
        </ContainerPrice>
        <Button className='btn-compra' color='secondary'>Iniciar pedido</Button>
      </CarritoContainer>
      </CarritoPadre>
      </AnimatePresence>
    </NavbarConteiner>
  </>
  )
}

export default IconoCart