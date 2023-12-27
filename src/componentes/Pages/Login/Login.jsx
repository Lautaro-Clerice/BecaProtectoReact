import React from 'react';
import { useState } from 'react';
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
} from './LoginStyles';
import { Formik } from 'formik';
import {loginInitialValues } from '../../Formik/InitialValues';
import { loginValidationScheema} from '../../Formik/ValidationScheema';
import { loginUser } from '../../../Axios/Axios-User';
import InputRegister from '../Register/InputRegister';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {setCurrentUser} from "../../../Redux/User/UserSlice"
import {useRedirect} from "../../Hooks/UserRedirect"
import { clearOrders } from '../../../Redux/Order/OrderSlice';
const Login = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }
  useRedirect("/");
  return (
    <>
      <ContainerLogin>
        <ImgLogoLogin src={beca} />
        <TittleLogin>Inicie Sesion</TittleLogin>
        <Formik
        initialValues={loginInitialValues}
        validationSchema={loginValidationScheema}
        onSubmit={ async (values) => {
            const user = await loginUser(values.email, values.password);
            console.log(user);
            if(user) {
              dispatch(setCurrentUser(
                {...user.usuario,
                token: user.token}
              ))
              dispatch(clearOrders());
            }
        }}
      >
        <ContainerForm autoComplete="on">
              <InputRegister name="email" placeholder="Email" type="email" />
              <InputRegister name="password" placeholder="Contraseña" type="password" />
              <BtnStyled type='submit'>Ingresar</BtnStyled>
          </ContainerForm>
          </Formik>
        <ContainerOpciones>
          <ListaOpciones>
            <Opciones>
              ¿Olvidaste tu contraseña?
            </Opciones>
            <Opciones>
              <a href="/register">¿No tenes una cuenta? Registrate!</a>
            </Opciones>
            
          </ListaOpciones>
        </ContainerOpciones>
      </ContainerLogin>
    </>
  );
};

export default Login;
