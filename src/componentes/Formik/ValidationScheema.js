import * as Yup from 'yup';
export const validationschema = Yup.object({
  name: Yup.string()
    .trim()
    .max(10, 'El nombre debe ser menor a 10 caracteres')
    .required('Este campo es obligatorio'),
  surname: Yup.string().trim().required('Este campo es obligatorio'),
  age: Yup.number()
    .required('Este campo es obligatorio')
    .moreThan(10, 'Tienes que se mayor que diez años')
    .lessThan(100, 'Debe ser menor a 100 años')
    .integer('Debe ingresar un numero entero'),
  email: Yup.string()
    .email('Debes ingresar un Mail valido')
    .required('Este campo es obligatorio'),
});

export const registerValidationScheema = Yup.object({
  name: Yup.string()
    .trim()
    .max(10, 'El nombre debe ser menor a 10 caracteres')
    .required('Este campo es obligatorio'),
  email: Yup.string()
    .email('Debes ingresar un Mail valido')
    .required('Este campo es obligatorio'),
  password: Yup.string().min(6, "Mínimo 6 caracteres").required("Este campo es obligatorio"),
});

export const loginValidationScheema = Yup.object({
  email: Yup.string()
    .email('Debes ingresar un Mail valido')
    .required('Este campo es obligatorio'),
  password: Yup.string().min(6, "Mínimo 6 caracteres").required("Este campo es obligatorio"),
});
