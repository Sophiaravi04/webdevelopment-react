import React from 'react'
import { FooterContainer, FooterWrap, FooterLinksContainer,FooterLinksWrapper,FooterLinkItems,FooterLinkTitle,FooterLink } from './FooterElements'

const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle> ABOUT US </FooterLinkTitle>
                            <FooterLink to="/signin">Time taken</FooterLink>
                            <FooterLink to="/signin">Terms of Services</FooterLink>
                            <FooterLink to="/signin">Work by us</FooterLink>
                            <FooterLink to="/signin">Projects</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle> RESOURCES </FooterLinkTitle>
                            <FooterLink to="/signin">Application</FooterLink>
                            <FooterLink to="/signin">Documentation</FooterLink>
                            <FooterLink to="/signin">Terms of Services</FooterLink>
                            
                            
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle> CONTACTS </FooterLinkTitle>
                            <FooterLink to="/signin"> Phoneno: 7871907674 </FooterLink>
                            <FooterLink to="/signin">Address: No 121 Annasalai,chennai-</FooterLink>
                            <FooterLink to="/signin">Emailid: jepthadaniel7@gmail.com</FooterLink>
                            
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle> SOCIAL </FooterLinkTitle>
                            <FooterLink to="/signin">Twitter</FooterLink>
                            <FooterLink to="/signin">Facebook</FooterLink>
                            <FooterLink to="/signin">LinkedIn</FooterLink>
                            <FooterLink to="/signin">Instagram</FooterLink>
                            
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
        </FooterWrap>
      
    </FooterContainer>
  )
}

export default Footer
