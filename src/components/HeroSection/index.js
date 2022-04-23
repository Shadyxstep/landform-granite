import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import { Button } from '../ButtonElements'
import { Link } from 'react-router-dom'
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
} from './HeroElements';

const HeroLanding = () => {
    const [hover, setHover ] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Ireland's premium suppliers of Wicklow White Granite.</HeroH1>
                <HeroP>
                    Learn more about what we do
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="about" onMouseEnter={onHover} onMouseLeave={onHover}>
                        About us
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroLanding
