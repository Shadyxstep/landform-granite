import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
// import logo1 from '../../images/landform-logo.png';
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
} from './NavbarElements';

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = ()=> {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        }
        else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
      <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
            <NavLogo to='/' onClick = {toggleHome} scrollNav={scrollNav}>Landform Granite</NavLogo>
            <MobileIcon onClick = {toggle}>
                <FaBars />
            </MobileIcon>
            <NavMenu>
                <NavItem scrollNav={scrollNav}>
                    <NavLinks to="about" scrollNav={scrollNav}
                    smooth={true} duration={500} 
                    spy={true} exact='true'
                    offset={-80}
                    activeClass="active">
                        About Us
                    </NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="gallery" scrollNav={scrollNav}
                    smooth={true} duration={500} 
                    spy={true} exact='true'
                    offset={-80}
                    activeClass="active">
                        Gallery
                    </NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="contact" scrollNav={scrollNav}
                    smooth={true} duration={500} 
                    spy={true} exact='true'
                    offset={-80}>
                        Contact
                    </NavLinks>
                </NavItem>
            </NavMenu>
        </NavbarContainer>
      </Nav>
      </>  
    );
};

export default Navbar
