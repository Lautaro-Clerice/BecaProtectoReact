import React from 'react'

import { CocinaStyle, HeroContainerStyle, MateStyle, PijamasStyle } from './StyleHero'
import { Image } from '@nextui-org/react';
import imgCarousel from "../Img/Carousel.png"
const Hero = () => {
  return(
  <>
  <Image
      isBlurred
      height={900}
      width={1200}
      src={imgCarousel}
      alt="NextUI Album Cover"
      classNames="m-5"
    />
  <HeroContainerStyle>

      <MateStyle>
        <h2>Mates</h2>
      </MateStyle>
      <PijamasStyle>
        <h2>Pijamas</h2>
      </PijamasStyle>
      <CocinaStyle>
        <h2>Cocina</h2>
      </CocinaStyle>

  </HeroContainerStyle>
  </>
  )
}

export default Hero
