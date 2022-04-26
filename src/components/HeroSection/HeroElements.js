import styled from "styled-components";
// import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md';


export const HeroContainer = styled.div`
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 910px;
    position: relative;
    z-index: 1;

    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.1) 100%),
        linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index: 2;
    } 
`;

export const HeroBg = styled.div`
    background-image: 
    linear-gradient(
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.1)
    ), url('https://i.imgur.com/THPwxz8.jpg');
    -o-object-fit: cover;
    object-fit: cover;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
`;

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const HeroH1 = styled.h1`
    color: #fff;
    text-shadow: 2px 2px #000;
    font-size: 48px;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const HeroP = styled.p`
    margin-top: 24px;
    color: #fff;
    text-shadow: 1px 1px #000;
    font-size: 26px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`;

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #01bf71;
`;

