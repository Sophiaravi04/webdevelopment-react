import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import {Button} from '../ButtonElements';
import {HeroContainer, HeroBg, VideoBg, HeroContent,HeroH1,HeroP,HeroBtmWrapper,ArrowForward,ArrowRight} from './HeroElements';

const HeroSection = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }


  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoplay loop muted src={Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
            <HeroH1>JDP SYSTEMS AND SERVICES</HeroH1>
            <HeroP>
                A vocational program that teaches students how to install, 
                configure and maintain computer systems and networks and The system based service web has provided businesses with many advantages when it comes to customer service; 
                a major one being the ability to help people in many different way
            </HeroP>
            <HeroBtmWrapper>
                <Button to='signup'
                  onMouseEnter={onHover}
                  onMouseLeave={onHover}
                  primary='true'
                  dark='true'
                >
                  Get started{hover ?<ArrowForward/> : <ArrowRight/>}   
                </Button>

            </HeroBtmWrapper>
        </HeroContent>
        
      
    </HeroContainer>
  )
}

export default HeroSection
