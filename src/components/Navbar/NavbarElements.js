import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

export const Nav = styled.nav`
    background: ${({ scrollNav }) => (scrollNav ? '#fff' : 'transparent')};
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.25rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1800px;
`;

export const NavLogo = styled(LinkRouter)`
    color: ${({ scrollNav }) => (scrollNav ? '#388E3C' : '#fff')};
    justify-self: flex-start;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-left: 8px;
    text-decoration: none;
    font-size: 22px;
    font-weight: 900;
    text-transform: uppercase;

    &:hover {
        transition: all 0.3s ease-in-out;
        color: #01bf71;
        transform: scale(1.10);
    }
`;

export const MobileIcon = styled.div`

    display: none;
    color: #38b000;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%); // Centers
        font-size: 1.75rem;
        cursor: pointer;
    }

    &:hover {
        transition: all 0.2s ease-in-out;
        color: #01bf71;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;
`;

export const NavLinks = styled(LinkScroll)`
    // color: #fff;
    color: ${({ scrollNav }) => (scrollNav ? '#388E3C' : '#fff')};
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-weight: 700;

    &.active {
        color: #fff;
        background: #388E3C;
        // border-bottom: 3px solid #fff;
        border-radius: 100px;
    }

    &:hover {
        color: #01bf71;
        transition: 0.2s ease-in-out;
        transform: scale(1.10);
    }
`;
