import React from 'react';
import { useSelector } from 'react-redux';
import CheckoutForm from './CheckoutForm/CheckoutForm';
import {ContainerCheckoutStyled} from './CheckoutStyles'
import ProductsCheckout from './Product/ProductsCheckout';
const Checkout = () => {
  const { cartItems, shippingCost } = useSelector(state => state.cart);

  const precio = cartItems.reduce((acc, item) => {
    return (acc += parseFloat(item.precio) * parseFloat(item.quantity));
  }, 0);
  

  return (
      <ContainerCheckoutStyled>
        <CheckoutForm
          cartItems={cartItems}
          shippingCost={shippingCost}
          precio={precio}
        />
        <ProductsCheckout
          cartItems={cartItems}
          shippingCost={shippingCost}
          precio={precio}
        />
      </ContainerCheckoutStyled>
  );
};

export default Checkout;