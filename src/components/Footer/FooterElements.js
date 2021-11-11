import styled from "styled-components"
import {Link} from 'react-router-dom'


export const FooterContainer = styled.footer`
    background-color: #101522;
`

export const FooterWrap = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`

export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;


    @media screen and (max-width: 820px) {
        padding-top: 32px
    }
`

export const FooterLinksWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`

export const FooterLinksItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 16px;
    text-align: center;
    width: 160px;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;

    @media screen and (max-width: 420px) {
        margin: 0;
        padding: 25px;
        width: 100%;
    }
`

export const FooterLinkTitle = styled.h1`
    font-size: 18px;
    margin-bottom: 16px;
    color: #fff;
`

export const FooterLink = styled.div`
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;

    &:hover {
        color: #388E3C;
        transition: 0.3 ease-in
    }
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
    font-size: 1rem;
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
    font-size: 12px;

    &:hover {
        color: #388E3C;
        transition: 0.3 ease-in
    }
`

export const WebsiteRights = styled.small`
    color: #fff;
    margin-bottom: 15px;
    font-size: 12px;
`

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 75px;
    color: #388E3C;
`

export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 28px;

    &:hover {
        color: #388E3C;
        transition: 0.3 ease-in
    }
`