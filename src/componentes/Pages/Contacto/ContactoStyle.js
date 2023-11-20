import styled from 'styled-components';
import { Form } from 'formik';

export const TituloContacto = styled.div`
    text-align: center;
    margin-top: 100px;
`;
export const StyledForm = styled(Form)`
    display: flex;
  justify-content: center;
  flex-direction:column;
  width: 50%;
`;
export const BtnForm = styled.button`
  padding: 10px;
  resize: none;
  width: 80px;
  height: 40px;
  margin-left: 30px;
  border: none;
  box-shadow: 0px 0px 7px rgba(193, 85, 207, 0.8431372549);
  background-color: rgba(193, 85, 207, 0.2039215686);
  text-align: center;
    &hover {
        background-color: rgba(193, 85, 207, 0.6509803922);
    }
`;
