import { Form } from 'formik';
import styled from 'styled-components';
const customFont = 'Roboto , sans-serif';

export const ContainerLogin = styled.div`
    font-family: ${customFont};
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-item:center;
    margin-top:100px;
    margin-bottom: 40px;
    width:300px;
    height:400px;
    background: #9363B6;
    background: linear-gradient(315deg, #9363B6, #9F22B2);
    border-radius:5px;
    box-shadow: 0px 0px 7px black;
`;
export const ImgLogoLogin = styled.img`
    margin-top:5%;
    align-self:center;
    border-radius:50%;
    width:130px;
    display:flex;
    box-shadow: 0px 0px 4px white;
`;

export const TittleLogin = styled.h2`
    align-self:center;
    color: white;
    font-weight:400;
`;
export const ContainerForm = styled(Form)`
    width:90%;
    height:190px;
    margin-left:5%;
    display:flex;
    flex-direction:column;
`;
export const InputStyled = styled.input`
    width:100%;
    height:25px;
    margin-bottom:10px;
    background-color:rgba(255, 255, 255, 0);
    border: none;
    border-bottom:1px solid white;
    color:white;
    &::placeholder {
        color:white;
        
    }
    &:focus {
        outline:none;

    }
`;

export const InputContraseña = styled.input`
    width:100%;
    height:25px;
    margin-bottom:10px;
    background-color:rgba(255, 255, 255, 0);
    border: none;
    border-bottom:1px solid white;
    color:white;
    &::placeholder {
        color:white;
        
    }
    &:focus {
        outline:none;

    }
`
export const ContainerContraseña = styled.div`
    display:flex;
`
export const StyleOjo = styled.div`
    position:absolute;
    margin-left:250px;
    color:white;
    font-size:20px;
    cursor:pointer;
`
export const BtnStyled = styled.button`
    align-self:center;
    padding:10px;
    cursor:pointer;
    width:100px;
    height:40px;
    color:white;
    background-color:rgba(255, 255, 255, 0);
    border:none;
    border-bottom:1px solid white;
    
`;

export const ContainerOpciones = styled.div`
    display:flex;
    justify-content:space-around;
    width:100%;
  
`
export const ListaOpciones = styled.ul`
    display:flex;
    width:100%;
    justify-content:space-around;
    margin-left: 20px;
`
export const Opciones = styled.li`
    color:white;
    font-size:12px;
    text-align:center;
    list-style:none;
    width:50%;
    margin-left:-10%;
`