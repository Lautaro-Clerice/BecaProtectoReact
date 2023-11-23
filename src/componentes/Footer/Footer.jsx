import React from 'react'
import { FooterContainer } from './FooterStyle'
const Footer = () => {
  return (
    <>
    <FooterContainer>
    <h4>Necesitas ayuda?</h4>
      <ul>
        
        <li><a href="/preguntas-frecuentes">¿Como hacer un pedido?</a></li>
        <li><a href="/preguntas-frecuentes">¿Puedo comprar directo desde la web?</a></li>
        <li><a href="/contacto">Contacto</a></li>
      </ul>
    </FooterContainer>
    </>
  )
}

export default Footer