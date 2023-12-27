import styled from "styled-components";

export const TitlePedido = styled.div `
    display:flex;
    justify-content:center;
    margin-top: 100px;
`
export const PedidosContainer = styled.div`
    width: 90%;
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    align-items: center;
    justify-content:center;
    height: auto;
    margin-top: 100px;
    margin-bottom: 50px;
    h2 {
        font-size: 24px;
        font-weight:400px;
        margin-bottom: 50px;

    }
`

export const CajaPedido = styled.div`
    width: 400px;
    height:200px;
    border-radius: 8px;
    box-shadow: 0px 0px 8px #63636345;
    display: flex;
    justify-content: space-around;
    flex-direction:column;
    align-items: center;
    .IoMdTime{
        color: orange;
    }
`