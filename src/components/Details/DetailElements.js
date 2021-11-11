import styled from "styled-components";

export const DetailsContainer = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        height: 1400px;
    }

    @media screen and (max-width: 480px) {
        height: 1000px;
    }
`

export const DetailsWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const DetailsCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }

    @media screen and (max-width: 1024px) {
        width: 200px;
    }

    @media screen and (max-width: 768px) {
        max-height: 270px;
    }

    @media screen and (max-width: 480px) {
        justify-content: center;
        text-align: center;
        padding: 20px;
    }
`

export const DetailsIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;

    @media screen and (max-width: 480px) {
        height: 100px;
        width: 100px;
    }
`

export const DetailsH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 50px;
    text-align: center;
    justify-content: center;

    @media screen and (max-width: 480px) {
        font-size: 1.75rem;
    }
`

export const DetailsH2 = styled.h2`
    font-size: 1.75rem;
    margin-bottom: 10px;

    @media screen and (max-width: 480px) {
        font-size: 1rem;
    }
`

export const DetailsP = styled.p`
    font-size: 1rem;
    text-align: center;
`