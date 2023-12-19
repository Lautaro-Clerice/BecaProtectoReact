import styled from 'styled-components';
const customFont = 'Roboto , sans-serif';

export const ContainerLogin = styled.div`
    font-family: ${customFont};
    display:flex;
    flex-direction:column;
    justify-content:start;
    align-item:center;
    margin-top:100px;
    margin-bottom: 50px;
    width:300px;
    height:490px;
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
export const ContainerForm = styled.div`
    width:90%;
    height:190px;
    margin-left:5%;
    display:flex;
    flex-direction:column;
`;
export const InputStyled = styled.input`
    width:100%;
    height:25px;
    margin-bottom:20px;
    background-color:rgba(255, 255, 255, 0);
    border: none;
    border-bottom:1px solid white;
    color:white;
    transition:.5s;
    &::placeholder {
        color:white;
        
    }
    &:focus {
        outline:none;

    }
    &:hover {
      border-bottom: 1px solid blueviolet;
    }
`;

export const InputContraseña = styled.input`
    width:100%;
    height:25px;
    margin-bottom:20px;
    background-color:rgba(255, 255, 255, 0);
    border: none;
    border-bottom:1px solid white;
    color:white;
    transition:.5s;
    &::placeholder {
        color:white;
        
    }
    &:focus {
        outline:none;

    }
    &:hover {
      border-bottom: 1px solid blueviolet;
    }
`;
export const ContainerContraseña = styled.div`
    display:flex;
    
`;
export const StyleOjo = styled.div`
    position:absolute;
    margin-left:50%;
    color:white;
    font-size:20px;
    cursor:pointer;
`;
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
    transition:.5s;
    &:hover {
      border-bottom: 1px solid blueviolet;
    }
    
`;

export const ContainerOpciones = styled.div`
    display:flex;
    justify-content:space-around;
    width:100%;
    margin-top:60px;
  
`;
export const ListaOpciones = styled.ul`
    display:flex;
    width:100%;
    justify-content:space-around;
`;
export const Opciones = styled.li`
    color:white;
    font-size:12px;
    text-align:center;
    list-style:none;
    width:50%;
    margin-left:-10%;
    cursor:pointer;
`;
export const FondoLogo = styled.img`
    z-index:0;
    width:60%;
    position:absolute;
`;
