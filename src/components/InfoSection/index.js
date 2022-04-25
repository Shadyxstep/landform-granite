import React from 'react'
import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    ImgWrap, 
    Img
} from './InfoElements';
import Slide from 'react-reveal/Slide';

const AboutUs = ({lightBg, id, imgStart, topLine, headline, darkText, description, img, alt}) => {
    return (
        <InfoContainer>
            <Slide left>
            <InfoWrapper lightBg={lightBg} id={id}>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                    <TextWrapper>
                        <TopLine>{topLine}</TopLine>
                        <Heading darkText={darkText}>{headline}</Heading>
                        <Subtitle darkText={darkText}>{description}</Subtitle>
                    </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                        <Img src={img} alt={alt}/>
                        </ImgWrap>
                    </Column2>                        
                </InfoRow>
            </InfoWrapper>
            </Slide>
        </InfoContainer>

    )
}

export default AboutUs
