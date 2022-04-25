import styled from "styled-components";

export const DetailsContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
        grid-template-columns: 1fr 1fr;
        padding: 0 20px;
    }

    @media screen and (max-width: 414px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const DetailsCard = styled.div`
    background: #DAD7CD;
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
    color: #C9F2C7;
    margin-bottom: 50px;
    text-align: center;
    justify-content: center;

    @media screen and (max-width: 480px) {
        font-size: 1.75rem;
    }
`

export const DetailsH2 = styled.h2`
    font-size: 1.75rem;
    color: rgb(40, 54, 24);

    @media screen and (max-width: 480px) {
        font-size: 1rem;
    }
`