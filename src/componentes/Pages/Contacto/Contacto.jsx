import React from 'react';
import { StyledForm, BtnForm, TituloContacto } from './ContactoStyle';
import { Formik } from 'formik';
import { initialValues } from '../../Formik/InitialValues';
import { validationschema } from '../../Formik/ValidationScheema';
import Input from '../../Generales/Input';

export const Contactos = () => {
  return (
    <>
      <TituloContacto>
        <h2>
          ¡Hola! Si tenes alguna duda, no dudes en ponerte en contacto con
          nosotros. Estamos para ayudarte en lo que necesites.
        </h2>

        <p>
          Por favor, completa el formulario a continuación con tus datos y tu
          mensaje y nos pondremos en contacto lo antes posible. ¡Gracias!
        </p>
      </TituloContacto>
      <Formik
        initialValues={initialValues}
        validationSchema={validationschema}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          resetForm();
        }}
      >
        <StyledForm>
          <Input name="name" label="Nombre" type="text" />
          <Input name="surname" label="Apellido" type="text" />
          <Input name="age" label="Edad" type="number" />
          <Input name="email" label="Mail" type="email" />
          <BtnForm>Enviar</BtnForm>
        </StyledForm>
      </Formik>
    </>
  );
};


export default Contactos