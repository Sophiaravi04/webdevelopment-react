import React from 'react';
import {Button} from '../ButtonElements';


import {InfoContainer, Infowrapper, InfoRow, Column1, Column2, Textwrapper, TopLine,Heading, Subtitle, BtnWrap, ImgWrap,Img} from '../InfoSection/InfoElements';

const InfoSection = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description,buttonlabel, img, alt,primary,dark,dark2}) => {
  return (
    <>
     <InfoContainer lightBg={lightBg} id={id}>
      <Infowrapper>
        <InfoRow imgStart={imgStart}>
          <Column1>
          <Textwrapper>
            <TopLine>{topLine}</TopLine>
            <Heading lightText={lightText}>{headline}</
            Heading>
            <Subtitle darkText={darkText}>{description}</
            Subtitle>
            <BtnWrap>
              <Button 
                to='home' 
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                primary={primary ? 1:0}
                dark={dark ? 1:0}
                dark2={dark2 ? 1:0}
              >
                {buttonlabel}
              </Button>
            </BtnWrap>
          </Textwrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img src={img} alt={alt} />
            </ImgWrap>
          </Column2>
        </InfoRow>
      </Infowrapper>
     </InfoContainer>
    </>
  )
}

export default InfoSection;
