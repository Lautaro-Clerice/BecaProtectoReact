import React from 'react'
import { Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Loader from '../../../../UI/Loader/Loader'
import Input from'../../../../UI/Input/Input'
import Submit from '../../../../UI/Submit/Submit'
import {CheckoutDatosStyled} from './ChekcoutFormStyles'
import {checkoutInitialValues} from '../../../Formik/InitialValues'
import {checkoutValidationSchema} from '../../../Formik/ValidationScheema'
import {CreateOrder} from '../../../../Axios/Axios-Orders'
import {clearCart} from "../../Productos/Carrito/CartSlice"

const CheckoutForm = ({ cartItems, precio, shippingCost }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector(state => state.user);

  return (
    <CheckoutDatosStyled>
      <h2>Ingresá tus datos</h2>
      <Formik
        initialValues={checkoutInitialValues}
        validationSchema={checkoutValidationSchema}
        onSubmit={async values => {
          const orderData = {
            items: cartItems|| [],













            
            precio,
            shippingCost,
            total: precio + shippingCost,
            shippingDetails: { ...values },
          };
          try {
            await CreateOrder(orderData, dispatch, currentUser);
            navigate('/Home');
            console.log(orderData);
            dispatch(clearCart());
          } catch (error) {
            alert('Error al crear la orden');
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Input
              name='name'
              htmlFor='nombre'
              type='text'
              id='nombre'
              placeholder='Tu nombre'
            >
              Nombre
            </Input>
            <Input
              name='cellphone'
              htmlFor='celular'
              type='text'
              id='celular'
              placeholder='Tu celular'
            >
              Celular
            </Input>
            <Input
              name='location'
              htmlFor='localidad'
              type='text'
              id='localidad'
              placeholder='Tu localidad'
            >
              Localidad
            </Input>
            <Input
              name='address'
              htmlFor='direccion'
              type='text'
              id='dirección'
              placeholder='Tu dirección'
            >
              Dirección
            </Input>
            <div>
              <Submit>
                {isSubmitting ? <Loader /> : 'Iniciar Pedido'}
              </Submit>
            </div>
          </Form>
        )}
      </Formik>
    </CheckoutDatosStyled>
  );
};

export default CheckoutForm;