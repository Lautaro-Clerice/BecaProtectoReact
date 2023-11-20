import React from 'react'
import {BsInstagram} from "react-icons/bs";
import { CorreoStyle, InstagramStyle, RedesContainer } from './RedesStyle'
import {BiLogoGmail} from "react-icons/bi";
import { Iconos } from '../Generales/IconosStyles'

const Redes = () => {
  return (
    <>
    <RedesContainer>
        <InstagramStyle>
            <h3>Seguinos en Instagram!</h3>
            
            <Iconos>
              <BsInstagram/>
            </Iconos>
            <p>@BecaShopBazar
            </p>
        </InstagramStyle>


        <CorreoStyle>
            <h3>Ante cualquier consulta nuestro mail:</h3>
            <Iconos>
              <BiLogoGmail/>
            </Iconos>
            <p>Becashopbazar@gmail.com</p>
        </CorreoStyle>


    </RedesContainer>
    </>
  )
}

export default Redes