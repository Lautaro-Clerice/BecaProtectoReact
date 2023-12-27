import React, { useState } from 'react'
import {ScrollShadow} from '@nextui-org/react'
import ModalCart from '../../Productos/Categorias/ModalCart'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { SHIPPING_COST } from '../../Productos/Carrito/Constant'
import { CarritoContainer, CarritoPadre, ContainerPrice, NavbarConteiner, ProductCartPadre, ShippingCostStyle, SubtotalStyle, TittleCart, TotalStyle } from './ProductsCheckoutStyles'
import {formatPrice} from "../../../Generales/Utils/FormatPrice"



const ProductsCheckout = ({shippingCost, price }) => {
    const navigate =useNavigate();
  const dispatch = useDispatch();
  const {cartItems} = useSelector(state => state.cart)
  const subtotalPrice = cartItems.reduce((acc, item) => {
      return (acc += (item.price * item.quantity))
  },0)
  const totalCartItem = useSelector(state => state.cart.cartItems).reduce((acc,item) => (
    acc += item.quantity
  ), 0)


  return (
    <>
    <CarritoPadre className={'open'}>
      <CarritoContainer>
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
        <ContainerPrice>
          <SubtotalStyle>
            <h3>Subtotal</h3>
            <h3>${formatPrice(subtotalPrice)}</h3>
          </SubtotalStyle>
          <ShippingCostStyle>
            <h3>Envio</h3>
            <h3>$
            {!cartItems.length ? 0 : formatPrice(SHIPPING_COST)}
            </h3>
          </ShippingCostStyle>
          <hr/>
          <TotalStyle>
            <h3>Total</h3>
            <h3>${!cartItems.length ? 0 : formatPrice(subtotalPrice + SHIPPING_COST)}</h3>
          </TotalStyle>
        </ContainerPrice>
      </CarritoContainer>
      </CarritoPadre>

  </>
  )
}

export default ProductsCheckout