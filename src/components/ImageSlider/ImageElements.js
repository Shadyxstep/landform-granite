import styled from "styled-components";

export const GalleryContainer = styled.div`
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    height: 100%;
    z-index: 1;

    @media screen and (max-width: 414px) {
        height: 500px;
    }

    @media screen and (min-width: 540px) {
        margin-top: -190px;
        height: 1000px;
        margin-bottom: -50px;
    }

    @media screen and (min-width: 768px) {
        margin-top: -200px;
        height: 1100px;
        margin-bottom: -50px;
    }

    @media screen and (min-width: 1399px) {
        height: 950px;
        margin-top: -200px;
    }

   
`

export const GalleryHeading = styled.h2`
    color: #388E3C;
    font-size: 2.5rem;
    padding: 1.5rem;
    text-transform: uppercase;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
        letter-spacing: 0.25rem;
    }
`