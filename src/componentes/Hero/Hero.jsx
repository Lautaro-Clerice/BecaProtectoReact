import React from 'react'
import {motion} from "framer-motion"
import { CocinaStyle, HeroContainerStyle, ImageHeroContainer, MateStyle, PijamasStyle } from './StyleHero'
import { Button, Image } from '@nextui-org/react';
import imgCarousel from "../Img/Carousel.png"
import ModalUser from "../Navbar/ModalUser/ModalUser"
const Hero = () => {
  return(
  <>
  <ImageHeroContainer>
    <ModalUser/>
  <Image
      isBlurred
      height={900}
      width={1200}
      src={imgCarousel}
      alt="NextUI Album Cover"
      classNames="m-5"
    />
    </ImageHeroContainer>
  <HeroContainerStyle>
  <motion.button whileHover={{ scale: 1.04 }}
      whileTap={{ scale: .97 }}>
          <a href="/productos">
            <MateStyle>
              <h2>Mates</h2>
            </MateStyle>
          </a>
    </motion.button> 
        <motion.button whileHover={{ scale: 1.04 }}
        whileTap={{ scale: .97 }}>
          <a href="/productos">
            <PijamasStyle>
              <h2>Pijamas</h2>
            </PijamasStyle>
          </a>
        </motion.button>
        <motion.button whileHover={{ scale: 1.04 }}
      whileTap={{ scale: .97 }}>
          <a href="/productos">
            <CocinaStyle>
              <h2>Cocina</h2>
            </CocinaStyle>
          </a>
        </motion.button>
          

  </HeroContainerStyle>
  <a href="/preguntas-frecuentes"><Button color='secondary' className='mb-10'>Mas info</Button></a>
  </>
  )
}

export default Hero
