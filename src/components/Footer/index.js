import React from 'react'
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinksItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,
    ContactWrap,
    SocialMediaWrapTwo
    } from './FooterElements'
import { FaFacebook, FaInstagram } from 'react-icons/fa'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinkTitle>Info</FooterLinkTitle>
                                <FooterLink to="/">About Us</FooterLink>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinkTitle>Product</FooterLinkTitle>
                                <FooterLink to="/">Our Granite</FooterLink>
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinkTitle>Photos</FooterLinkTitle>
                                <FooterLink to="/">Gallery</FooterLink>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinkTitle>Contact</FooterLinkTitle>
                                <FooterLink to="/">Get in touch</FooterLink>
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>
                            Landform Granite
                        </SocialLogo>
                        <ContactWrap>
                        Granabeg, Valleymount, Co. Wicklow
                        </ContactWrap>
                        <ContactWrap>
                        Tel:  087 9155536 
                        </ContactWrap>
                        <ContactWrap>
                        E-mail: landformgranite@gmail.com
                        </ContactWrap>
                        <WebsiteRights>Landform Granite © {new Date().getFullYear()} <br></br> All rights reserved.</WebsiteRights>
                    </SocialMediaWrap>
                    <SocialMediaWrapTwo>
                    <SocialIcons>
                            <SocialIconLink href='https://www.facebook.com/LandFormGranite-1520320781630709' target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href='https://www.instagram.com/landform_granite/' target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrapTwo>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
