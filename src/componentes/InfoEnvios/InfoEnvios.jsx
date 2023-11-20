import React from 'react'
import {BsAirplane} from "react-icons/bs"
import {BsCashCoin} from "react-icons/bs"
import {AiOutlineGift} from "react-icons/bs"
import { ContainerInfoStyle, EnviosStyle, MediosPagoStyle, PagosStyle } from './componentes/InfoEnvios/InfoEnvios'

const InfoEnvios = () => {
  return (
    <ContainerInfoStyle>
        <EnviosStyle>
        <BsAirplane/>
        
        <h2>Envios a todo el pais</h2>
        <p>Compra desde tu casa.</p>
        </EnviosStyle>
        <PagosStyle>
        <h2>Medios de pago</h2>
        <p>Aceptamos Tarjeta debito/credito. Efectivo o mediante Rapipago/Pago facil</p>
        <BsCashCoin/>
        </PagosStyle>
        <MediosPagoStyle>
        <h2>Punto de entrega</h2>
        <p>Pasa a retirarlo en persona!</p>
        <AiOutlineGift/>
        </MediosPagoStyle>
    </ContainerInfoStyle>

  )
}


export default InfoEnvios