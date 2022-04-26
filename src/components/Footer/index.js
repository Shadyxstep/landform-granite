import React from 'react'
import {
    FooterContainer,
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,
    ContactWrap,
    SocialMediaWrapTwo
    } from './FooterElements'
import { FaFacebook, FaInstagram, FaGoogle } from 'react-icons/fa'


const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
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
                        <ContactWrap onClick={() => window.location = 'mailto:landformgranite@gmail.com'}>
                        E-mail: landformgranite@gmail.com
                        </ContactWrap>
                        <WebsiteRights>Landform Granite © {new Date().getFullYear()}<br></br> All rights reserved.</WebsiteRights>
                    </SocialMediaWrap>
                    <SocialMediaWrapTwo>
                    <SocialIcons>
                            <SocialIconLink href='https://www.facebook.com/LandFormGranite-1520320781630709' target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href='https://www.instagram.com/landform_granite/' target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href='https://www.instagram.com/landform_granite/' target="_blank" aria-label="Instagram">
                                <FaGoogle />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrapTwo>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
