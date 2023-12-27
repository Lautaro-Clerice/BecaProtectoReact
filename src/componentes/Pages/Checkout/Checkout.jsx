import React from 'react';
import { useSelector } from 'react-redux';
import CheckoutForm from './CheckoutForm/CheckoutForm';
import {ContainerCheckoutStyled} from './CheckoutStyles'
import ProductsCheckout from './Product/ProductsCheckout';
const Checkout = () => {
  const { cartItems, shippingCost } = useSelector(state => state.cart);

  const price = cartItems.reduce((acc, item) => {
    return (acc += parseFloat(item.price) * parseFloat(item.quantity));
  }, 0);
  

  return (
      <ContainerCheckoutStyled>
        <CheckoutForm
          cartItems={cartItems}
          shippingCost={shippingCost}
          price={price}
        />
        <ProductsCheckout
          cartItems={cartItems}
          shippingCost={shippingCost}
          price={price}
        />
      </ContainerCheckoutStyled>
  );
};

export default Checkout;