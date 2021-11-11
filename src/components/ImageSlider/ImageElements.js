import styled from "styled-components";

export const GalleryContainer = styled.div`
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 950px;
    z-index: 1;

    @media screen and (max-width: 480px) {
        height: 700px;
    }
`

export const GalleryHeading = styled.h2`
    color: #388E3C;
    font-size: 2.5rem;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`