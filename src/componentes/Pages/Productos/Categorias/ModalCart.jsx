import React from 'react'
import {IoMdTrash} from "react-icons/io"
import { IoIosAdd } from "react-icons/io";
import {IoIosRemove} from "react-icons/io"
import { ButtonQuantity, ContainerProductCart, MasMenosCard, QuantityCart, TittleCardCart } from './CategoriesStyle'
import { useDispatch } from "react-redux"
import { addToCart, removeFromCart } from '../Carrito/CartSlice';

const ModalCart = ({img, price, title, desc, id, quantity}) => {
  const dispatch = useDispatch()
  return (
    <ContainerProductCart>
            <img src={img} />
        <TittleCardCart>
            <h2>{title}</h2>
            <p>{price}</p>
        </TittleCardCart>
        <MasMenosCard>
            <ButtonQuantity
          onClick={() => dispatch(removeFromCart(id))}>
            {quantity === 1 ? <IoMdTrash className='IoMdTrash ' /> : <IoIosRemove className='IoIosRemove' />}
          </ButtonQuantity>
          <QuantityCart>
            <p>{quantity}</p>
            </QuantityCart>
            <ButtonQuantity><IoIosAdd className='IoIosAdd' onClick={() =>
            dispatch(addToCart({ img, title, desc, price, id}))
          } /></ButtonQuantity>
        </MasMenosCard>
    </ContainerProductCart>
  )
}

export default ModalCart