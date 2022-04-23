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

    @media screen and (max-width: 820px) {
        margin-top: -150px;
        height: 1100px;
    }

    @media screen and (min-width: 1399px) {
        height: 950px;
    }

   
`

export const GalleryHeading = styled.h2`
    color: #388E3C;
    font-size: 2.5rem;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`