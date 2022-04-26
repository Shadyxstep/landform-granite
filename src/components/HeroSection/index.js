import React, {useState} from 'react';
import { Button } from '../ButtonElements'
import {
    HeroContainer,
    HeroBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
} from './HeroElements';
import Zoom from 'react-reveal/Zoom';


const HeroLanding = () => {
    const [hover, setHover ] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBg>
            </HeroBg>
            <HeroContent>
            <Zoom>
                <HeroH1>Ireland's premium suppliers of Wicklow White Granite.</HeroH1>
                <HeroP>
                    Learn more about what we do
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="about" onMouseEnter={onHover} onMouseLeave={onHover}>
                        About us
                    </Button>
                </HeroBtnWrapper>
                </Zoom>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroLanding
