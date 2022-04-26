import styled from "styled-components"
import {Link} from 'react-router-dom'


export const FooterContainer = styled.footer`
    background-color: #101522;
`

export const FooterWrap = styled.div`
    padding: 40px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`

export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 0 auto;

    @media screen and (max-width: 840px) {
        flex-direction: column;
    }
`

export const SocialMediaWrapTwo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    max-width: 1100px;
    margin: 40px auto 0 auto;
`

export const SocialLogo = styled(Link)`
    color: #fff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;

    &:hover {
        color: #388E3C;
        transition: 0.3 ease-in
    }
`

export const ContactWrap = styled.small`
    color: #fff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    text-align: center;
    font-size: 0.9rem;

    &:hover {
        color: #388E3C;
        transition: 0.3 ease-in
    }
`

export const WebsiteRights = styled.small`
    color: #fff;
    margin-bottom: 15px;
    font-size: 12px;
    text-align:center;
`

export const SocialIcons = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 40px;
    justify-content: center;
    align-items: center;
    width: 75px;
    color: #388E3C;

    @media screen and (max-width: 414px){
        grid-gap: 20px;
    }
`

export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 28px;
    justify-content: space-between;

    &:hover {
        color: #388E3C;
        transition: 0.3 ease-in
    }
`