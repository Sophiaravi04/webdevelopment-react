import React from 'react';
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-3.svg' 
import Icon3 from '../../images/svg-5.svg' 

import { ServicesContainer, ServicesH1, ServicesWrapper,ServicesCard,ServicesIcon ,ServicesH2, ServicesP} from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer id="services">
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
           <ServicesCard>
              <ServicesIcon src={Icon1}/>
              <ServicesH2>Rectify your problems</ServicesH2>
              <ServicesP>Rectify your problems with short span of time</ServicesP>
           </ServicesCard>
           <ServicesCard>
              <ServicesIcon src={Icon2}/>
              <ServicesH2>Communications</ServicesH2>
              <ServicesP>Easy to communicate for sharing your issues</ServicesP>
           </ServicesCard>
           <ServicesCard>
              <ServicesIcon src={Icon3}/>
              <ServicesH2>Low cost</ServicesH2>
              <ServicesP>Not at all expensive,more believability</ServicesP>
           </ServicesCard>
        </ServicesWrapper>

    </ServicesContainer>
      
    
  )
}

export default Services
