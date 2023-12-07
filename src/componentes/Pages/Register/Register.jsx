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
import { Formik, Form } from 'formik';
import { registerInitialValues } from '../../Formik/InitialValues';
import { registerValidationScheema } from '../../Formik/ValidationScheema';
import InputRegister from './InputRegister';
import {createUser} from "../../../Axios/Axios-User"
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  return (
    <>
      <ContainerLogin>
        <ImgLogoLogin src={beca} />
        <TittleLogin>Registrate!</TittleLogin>
        <Formik
          initialValues={registerInitialValues}
          validationSchema={registerValidationScheema}
          onSubmit={ async (values, actions) => {
            try {
              const user = await createUser(values.name, values.email, values.password);
              console.log(user);
              actions.resetForm();
              if(user) {
                navigate("/login")
              }
            } catch (error) {
              console.error("Error creating user:", error);
            }
          }}
        >
          <Form>
            <ContainerForm>
              <InputRegister name="name" placeholder="Nombre de usuario" type="text" />
              <InputRegister name="email" placeholder="Email" type="email" />
              <InputRegister name="password" placeholder="Contraseña" type="password" />

              <BtnStyled type="submit">Registrarme</BtnStyled>
            </ContainerForm>
          </Form>
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
