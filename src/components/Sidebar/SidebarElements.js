import styled from 'styled-components';
import { Link as LinkScroll } from 'react-scroll';
// import { Link as LinkRouter } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #fff;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top
    : ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
    color: #018749;

    &:hover {
        color: #01bf71;
        transition: 0.2s ease-in-out;
        transform: scale(1.25);
    }
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const SidebarWrapper = styled.div`
    color: #fff;
`;

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 100px);
    text-align: center;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat (3, 60px);
    }
`;

export const SidebarLink = styled(LinkScroll)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #018749;
    font-weight: 700;
    cursor: pointer;

    &:hover {
        color: #01bf71;
        transition: 0.2s ease-in-out;
        transform: scale(1.25);
    }
`;

export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`;



export const SocialIconLink = styled.a`
    color: #388E3C;
    font-size: 40px;
    padding: 20px;

    &:hover {
        color: #01bf71;
        transition: 0.2s ease-in-out;
        transform: scale(1.25);
    }
`