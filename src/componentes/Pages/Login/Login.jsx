import React from 'react';
import { useState } from 'react';
import beca from "../../Img/BecaShop.png"
import {
    BtnStyled,
  ContainerContraseña,
  ContainerForm,
  ContainerLogin,
  ContainerOpciones,
  ImgLogoLogin,
  InputContraseña,
  InputStyled,
  ListaOpciones,
  ocultarPassword,
  Opciones,
  StyleOjo,
  TittleLogin,
} from './LoginStyles';
import { BsFillEyeSlashFill, BsFillEyeFill } from "react-icons/bs"
import { Formik } from 'formik';
import { initialValues } from '../../Formik/InitialValues';
import { validationschema } from '../../Formik/ValidationScheema';

const Login = () => {

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }
  return (
    <>
      <ContainerLogin>
        <ImgLogoLogin src={beca} />
        <TittleLogin>Inicie Sesion</TittleLogin>
        <Formik
        initialValues={initialValues}
        validationSchema={validationschema}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          resetForm();
        }}
      >
        <ContainerForm>
          <InputStyled placeholder="Usario" type="text" />
            <ContainerContraseña>
            <InputContraseña
              placeholder="Contraseña"
              type={showPassword ? "text" : "password"}
            />
            <StyleOjo onClick={togglePasswordVisibility}>
              {showPassword ? <BsFillEyeFill /> : <BsFillEyeSlashFill />}
            </StyleOjo>
            </ContainerContraseña>
          <BtnStyled>Ingresar</BtnStyled>
          </ContainerForm>
          </Formik>
        <ContainerOpciones>
          <ListaOpciones>
            <Opciones>
              ¿Olvidaste tu contraseña?
            </Opciones>
            <Opciones>
              ¿No tenes una cuenta? Registrate!
            </Opciones>
            
          </ListaOpciones>
        </ContainerOpciones>
      </ContainerLogin>
    </>
  );
};

export default Login;
