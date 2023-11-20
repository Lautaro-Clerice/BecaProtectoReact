import React from 'react';

import { ErrorMessage, Field } from 'formik';
import { InputStyled } from './RegisterStyles';
import { ErrorStyled } from '../../Generales/InputStyles';

const InputRegister = ({ name, type, isError, placeholder }) => {
  return (
    <>
      <Field
        placeholder={placeholder}
        name={name}
        type={type}
        error={isError}
        as={InputStyled}
      />
      <ErrorMessage name={name} component={ErrorStyled} />
      </>
  );
};

export default InputRegister;