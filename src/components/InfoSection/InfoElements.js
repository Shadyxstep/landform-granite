import styled from "styled-components";


export const InfoContainer = styled.div`
    color: #fff;
    background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#fff')};
`

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 100%;
    width: 100%;
    max-width: 1800px;
    margin-right: auto;
    margin-left: auto;
    padding: 40px 24px;
    justify-content: center;
`

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax()(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 10px;

    @media screen and (max-width: 480px) {
        padding-bottom: 10px;
    }
`

export const TopLine = styled.p`
    color: #388E3C;
    font-size: 32px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;

    @media screen and (max-width: 480px) {
        font-size: 22px;
    }
`

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 42px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({ lightText }) => (lightText ? '#fff' : '#000')};

    @media screen and (max-width: 480px) {
        font-size: 20px;
    }
`

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 20px;
    line-height: 32px;
    font-weight: 500;
    color: ${({darkText}) => (darkText ? '#fff' : '#000')};
`

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;

    @media screen and (max-width: 480px) {
        max-width: 300px;
    }
`

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
    border-radius: 10%;
    height: 400px;


    @media screen and (max-width: 540px) {
        height: 300px;
        width: 300px;
        margin: auto;
    }
`