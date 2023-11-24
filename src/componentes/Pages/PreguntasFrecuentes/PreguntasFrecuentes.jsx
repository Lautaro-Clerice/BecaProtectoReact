import React from 'react'
import img from "../../Img/BecaShop.png"
import {Accordion, AccordionItem, Button} from "@nextui-org/react";
import { ImgInfo, InfoContainer, ParrafoTitulo, PreguntasFrecuentesContainer, TextoInfo } from './PreguntasFrecuentesStyles';;
const PreguntasFrecuentes = () => {
    return (
        <>

        <InfoContainer>
          <ImgInfo>
          <img src={img} alt="becashop" />
          </ImgInfo>
          <TextoInfo>
            <h2>Quienes somos</h2>
            <p>Desde nuestro inicio en 2021, en BecaShop nos hemos dedicado a ofrecerte lo mejor en diseño y decoración de interiores. Somos un equipo apasionado que entiende la importancia de convertir tu hogar en un espacio único.
            <a href="/contacto"><Button className='btn'>Mas info</Button></a>
            </p>
          </TextoInfo>
        </InfoContainer>
        <PreguntasFrecuentesContainer>
          <ParrafoTitulo>
            <h2>Preguntas Frecuentes</h2>
          </ParrafoTitulo>
        <Accordion isCompact>
          <AccordionItem key="1" aria-label="Accordion 1" title="-Como hago un pedido?">
          Para hacer le pedido podes dirigirte a nuestro whatsapp, pulsando el boton con el icono de la aplicacion en la parte inferior derecha.<br/>
    -Otro metodo de realizar un pedido es agregando los productos al carrito, y generando el numero de      compra, de esa manera, Nosotros nos estaremos contactando por mail con vos.
          </AccordionItem>
          <AccordionItem key="2" aria-label="Accordion 2" title="Puedo comprar directo desde la web?">
          No, no podes comprar directo desde la web por seguridad de ustedes y nosotros. en Beca Shop preferimos terminar el pedido en contacto con ustedes, para mas comodidad.
          </AccordionItem>
          <AccordionItem key="3" aria-label="Accordion 3" title="Metodos de envios">
          Los envios los hacemos via correo argentino, o Realizamos puntos de entrega en zona norte.
          </AccordionItem>
          <AccordionItem key="4" aria-label="Accordion 3" title="Se pueden realizar compras con tarjetas?">
          Si, mediante un link de mercado pago podes abonar de la forma que vos quieras
          </AccordionItem>
          <AccordionItem key="5" aria-label="Accordion 3" title="Tienen precios mayorista?">
          Si, tenemos precios mayoristas que son a partir de 10 mil pesos. Estos precios los pasamos por whatsapp o Mail.
          </AccordionItem>
          
        </Accordion>
        </PreguntasFrecuentesContainer>
        </>
      );
}

export default PreguntasFrecuentes