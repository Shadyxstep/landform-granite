import styled from "styled-components";

export const ThankYouH1 = styled.h1`
    font-size: 40px;
    color: #fff;

    @media screen and (max-width: 414px) {
        font-size: 25px;
    }
`

export const ThankYouContainer = styled.div`
    height: 100vh;
    padding: 50px;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
    background: #388E3C;
    text-align: center;

    @media screen and (max-width: 414px) {
        padding:10px;
    }
`