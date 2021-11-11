import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SocialIconLink } from './SidebarElements';
import { FaFacebook, FaInstagram } from 'react-icons/fa'


const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen = {isOpen} onClick = {toggle}>
            <Icon onClick =  {toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick = {toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to="gallery" onClick = {toggle}>
                        Gallery
                    </SidebarLink>
                    <SidebarLink to="contact" onClick = {toggle}>
                        Contact
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                        <SocialIconLink href='https://www.facebook.com/LandFormGranite-1520320781630709' target="_blank" aria-label="Facebook">
                                <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href='https://www.instagram.com/landform_granite/' target="_blank" aria-label="Instagram">
                                <FaInstagram />
                        </SocialIconLink>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar
