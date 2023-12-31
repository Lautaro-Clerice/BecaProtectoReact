import styled from 'styled-components';

export const TituloCategoria = styled.div`
h2 {
  color: #7e22ce86 ;
  font-size: 24px;
  font-weight: 600;
}
  width: 100%;
  margin-top:100px;
  display: flex;
  justify-content: space-around;
`

export const CarritoStyled = styled.div`
  z-index: 1000000;
  box-sizing: border-box;
  background-color:white;
  position:fixed;
  height:600px;
  display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};
  flex-direction:column;
  font-family:arial;
  
`;

export const IconCierre = styled.div`
font-size:24px;
margin-left:30px;
`;
export const TittleCarrito = styled.div`
 margin-top:30px;
 display:flex;
 justify-content:space-around;
 h2{
   margin-top:-0px;
 }
`;
export const ContProdCart = styled.div`
 border-radius:10px;
 width:500px;
 height:150px;
 align-self:center;
 background-color:grey;
 display: flex;
 justify-content: space-around;
 margin:10px;
`;
export const ImgCardCart = styled.div`
  width: 30%;
  height: 85%;
  margin-top:2%;
`
export const TittleCardCart = styled.div`
  width: 30%;
  height: 85%;
  margin-top:2%;
  display: flex;
  flex-direction: column;

  h2 {
    color:black;
    font-weight: 400;
    font-size: 16px;
  }
`
export const MasMenosCard = styled.div`
  width: 35%;
  height: 85%;
  margin-top:2%;
  margin-right: 10px;
  display: flex;
  justify-content: space-around;
`
export const TotalPedido = styled.div`
  align-self:center;
  width:80%;
  height:150px;
  margin-top:30px;
  margin-bottom: 30px;
`;

export const CostoEnvio = styled.div`
  display: flex;
  justify-content: space-around;
`
export const SubtotalCart = styled.div`
  display: flex;
  justify-content: space-around;
`
export const TotalCart = styled.div`
  display: flex;
  justify-content: space-around;
`

export const ButtonQuantity = styled.button`
  width: 20px;
  .IoMdTrash, .IoIosRemove, .IoIosAdd {
    color:white;
    padding:4px;
    border-radius: 10px;
    width:30px;
    height:30px;
    background-color: pink;
  }
`
export const QuantityCart = styled.div `
  display: flex;
  justify-content:center;
  color: white;
  background-color: #cdb4db ;
  border-radius:10px;
  height: 30px;
  width: 30px;
  margin-top: 27px;
  margin-left:9px;
`
export const WraperContCart = styled.div `
justify-content: center;
  display:flex;
  flex-wrap: wrap;
  margin:10px;
`
export const CarritoPadre = styled.div`
display:flex;
justify-content: end;
width:50%;
margin-top:10px;
opacity: 0;
    transform: scale(0.8);
    transition: opacity 0.3s ease, transform 0.3s ease;

    &.open {
        opacity: 1;
        transform: scale(1);
    }
`;
export const CarritoContainer = styled.div`
display: flex;;
flex-direction:column;
align-items:center;
  border-radius:20px 0px 0px 20px;
  background-color:#e4c1f9;
  width:400px;
 height:85vh;
 transition: 1s;
 hr {
  margin-top:-5px;
   border:1px solid white;
   width:70%;
 }
 .menu {
  color:white;
  font-size:1.5rem;
  margin-top:25px;
  position:absolute;
  margin-left:-80%;
}
.FcFullTrash{
   font-size:28px;
   color: white;
   cursor:pointer;
   align-self:center;
 }
 .btn-compra {
  margin-top: -10px;
 }
.carrito-entrada {
  transform: translate(200%);
  transition: all .4s ease;
}
`;
export const TittleCart = styled.div`
display:flex;
justify-content:center;
height:70px;
h2 {
  align-self: center;
  color:white;
  font-weight:400;
  justify-self:center;
}
`;
export const ProductCartPadre = styled.div`
  display: flex;
  margin-top:20px;
  margin-bottom: 10px;
  gap: 5px;
  border-radius:10px;
  padding-top:60px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 270px;
  overflow: auto;
`;
export const ContainerProductCart = styled.div`
  display:flex;
  justify-content:space-around;
  border-radius:12px;
  margin-top:15px;
  width:270px;
  height:100px;
  background-color: #edf6f9;
  box-shadow:0px 0px 9px #6c757d;
  img {
    border:1px solid black;
    border-radius:12px;
    margin:5px;
    width:35%;
  }

`;

export const ContainerPrice = styled.div`

height: 100px;
display:flex;
flex-direction:column;
width:100%;
hr {
  margin-top:5px;
  justify-self: center;
  align-self: center;
   border:1px solid white;
   width:70%;
 }
`;
export const SubtotalStyle = styled.div`
display:flex;
justify-content:space-around;
h3 {
  display:flex;
  color:white;
  font-weight:400;
  font-size:1rem;
}
`;
export const ShippingCostStyle = styled.div`
display:flex;
justify-content:space-around;
h3 {
  display:flex;
  color:white;
  font-weight:400;
  font-size:1rem;
}
`;
export const TotalStyle = styled.div`
display:flex;
justify-content:space-around;
margin-top: 10px;
h3 {
  display:flex;
  color:white;
  font-weight:400;
  font-size:1rem;
}
`;
