import React from 'react';
import beca from "../../Img/BecaShop.png"
import {
  BtnStyled,
  ContainerForm,
  ContainerLogin,
  ContainerOpciones,
  ImgLogoLogin,
  ListaOpciones,
  Opciones,
  TittleLogin,
} from './RegisterStyles';
import { Formik } from 'formik';
import { initialValues } from '../../Formik/InitialValues';
import { validationschema } from '../../Formik/ValidationScheema';
import InputRegister from './InputRegister';
const Register = () => {
  return (
    <>
      <ContainerLogin>
        <ImgLogoLogin src={beca} />
        <TittleLogin>Registrate!</TittleLogin>
      <Formik
        initialValues={initialValues}
        validationSchema={validationschema}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          resetForm();
        }}
      >
        <ContainerForm>
          <InputRegister name="name" placeholder="Nombre de usuario" type="text" />
          <InputRegister name="phone" placeholder="Telefono" type="text" />
          <InputRegister name="email" placeholder="Email" type="Email" />
          <InputRegister name="password" placeholder="Contraseña"  type="text" />
          <InputRegister name="passwordRepeat" placeholder="Repeti tu contraseña"  type="text" />
          <BtnStyled>Registrarme</BtnStyled>
        </ContainerForm>
      </Formik>
      <ContainerOpciones>
          <ListaOpciones>
            <Opciones><a href="/login">Ya tengo una cuenta</a></Opciones>
          </ListaOpciones>
        </ContainerOpciones>
      </ContainerLogin>
    </>
  );
};

export default Register;