import React from 'react';
import { ErrorMessage, Field } from 'formik';
import { InputStyled } from './RegisterStyles';
import { ErrorStyled } from '../../Generales/InputStyles';

const InputRegister = ({ name, type, placeholder }) => {
  return (
    <Field name={name}>
      {({ field, form: { errors, touched } }) => (
        <>
          <InputStyled
            type={type}
            placeholder={placeholder}
            {...field}
            isError={errors[name] && touched[name]}
          />
          <ErrorMessage name={name} component={ErrorStyled} />
        </>
      )}
    </Field>
  );
};

export default InputRegister;
