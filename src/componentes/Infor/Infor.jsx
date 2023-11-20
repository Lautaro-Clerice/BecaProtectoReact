import React from 'react'
import {BsAirplane} from "react-icons/bs";
import {BsCashCoin} from "react-icons/bs";
import {AiOutlineGift} from "react-icons/ai";
import { ContainerInfoStyle, EnviosStyle, MediosPagoStyle, PagosStyle } from './InforStyles'
import { Iconos } from '../Generales/IconosStyles';
const Infor = () => {
  return (
    <>
    <ContainerInfoStyle>
        <EnviosStyle>
        <Iconos>
          <BsAirplane/>
          </Iconos>
        <h2>Envios a todo el pais</h2>
        <p>Compra desde tu casa.</p>
        </EnviosStyle>
        <PagosStyle>
          <Iconos>
          <BsCashCoin/>
          </Iconos>
        <h2>Medios de pago</h2>
        <p>Aceptamos Tarjeta debito/credito. Efectivo o mediante Rapipago/Pago facil</p>
        </PagosStyle>
        <MediosPagoStyle>
          <Iconos>
          <AiOutlineGift/>
          </Iconos>
        <h2>Punto de entrega</h2>
        <p>Pasa a retirarlo en persona!</p>
        </MediosPagoStyle>
    </ContainerInfoStyle>
    </>
  )
}

export default Infor