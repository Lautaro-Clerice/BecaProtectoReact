import React, { useState } from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { IconoCartContainer, LinkCarrito } from './IconoCartStyles';
import { CarritoContainer, CarritoPadre, ContainerPrice, NavbarConteiner, ProductCartPadre, ShippingCostStyle, SubtotalStyle, TittleCart,TotalStyle} from '../Categorias/CategoriesStyle';
import ModalCart from '../Categorias/ModalCart';
import { SHIPPING_COST } from './Constant';
import { AiFillCloseCircle } from 'react-icons/ai';
import { FcFullTrash } from 'react-icons/fc';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from './CartSlice';
import { IoMdMenu } from 'react-icons/io';

import { AnimatePresence } from 'framer-motion';
export const IconoCart = () => {
  const dispatch = useDispatch();
  const [isCartVisible, setIsCartVisible] = useState(false);

  const toggleCartVisibility = () => {
    setIsCartVisible(!isCartVisible);
  };
  const categorias = useSelector(state => state.categories.categories)
  const productos = useSelector(state => state.products.products)
  const {cartItems, shippingCost} = useSelector(state => state.cart)
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
            <FaCartShopping className='iconBag' onClick={toggleCartVisibility}/>
            <span>{totalCartItem}</span>
        </LinkCarrito>
    </IconoCartContainer>
    <AnimatePresence>
    <CarritoPadre>
      <CarritoContainer isVisible={isCartVisible}>
      <IoMdMenu className="menu" onClick={toggleCartVisibility} />
        <TittleCart>
          <h2>Tus productos</h2>
        </TittleCart>
        <hr />
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
        <FcFullTrash className="FcFullTrash" onClick={() => dispatch(clearCart())} disabled={!cartItems.length} />
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
      </CarritoContainer>
      </CarritoPadre>
      </AnimatePresence>
    </NavbarConteiner>
  </>
  )
}

export default IconoCart