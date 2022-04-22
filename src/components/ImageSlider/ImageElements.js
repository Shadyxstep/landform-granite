import styled from "styled-components";

export const GalleryContainer = styled.div`
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    height: 930px;
    z-index: 1;
`

export const GalleryHeading = styled.h2`
    color: #388E3C;
    font-size: 2.5rem;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`