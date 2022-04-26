import React from 'react'
import "../Details/styles.css"
import { DetailsContainer, DetailsH1, DetailsWrapper, DetailsCard, DetailsIcon, DetailsH2} from './DetailElements'
import Fade from 'react-reveal/Fade';

const Details = () => {

    return (
        <DetailsContainer id="details" className="details">
            <DetailsH1>Our Granite is suitable for</DetailsH1>
            <DetailsWrapper>

                <Fade>
                <DetailsCard>
                        <DetailsIcon src={'https://i.imgur.com/dTtZ7zi.png'}/>
                        <DetailsH2>Building</DetailsH2>
                </DetailsCard>
                </Fade>

                <Fade>
                <DetailsCard>
                    <DetailsIcon src={'https://i.imgur.com/slkZ4y9.png'}/>
                    <DetailsH2>Construction</DetailsH2>
                </DetailsCard>
                </Fade>

                <Fade>
                <DetailsCard>
                    <DetailsIcon src={'https://i.imgur.com/7cJbmVp.png'}/>
                    <DetailsH2>Cladding</DetailsH2>
                </DetailsCard>
                </Fade>

                <Fade>
                <DetailsCard>
                    <DetailsIcon src={'https://i.imgur.com/cI1KvoF.png'}/>
                    <DetailsH2>Monuments</DetailsH2>
                </DetailsCard>
                </Fade>

                <Fade>
                <DetailsCard>
                    <DetailsIcon src={'https://i.imgur.com/dlj412B.png'}/>
                    <DetailsH2>Paving</DetailsH2>
                </DetailsCard>
                </Fade>

                <Fade>
                <DetailsCard>
                    <DetailsIcon src={'https://i.imgur.com/jGQIWAv.png'}/>
                    <DetailsH2>Boulders</DetailsH2>
                </DetailsCard>
                </Fade>

                <Fade>
                <DetailsCard>
                    <DetailsIcon src={'https://i.imgur.com/OHpHjsV.png'}/>
                    <DetailsH2>Features</DetailsH2>
                </DetailsCard>
                </Fade>

                <Fade>
                <DetailsCard>
                    <DetailsIcon src={'https://i.imgur.com/SjYYf3h.png'}/>
                    <DetailsH2>Walls</DetailsH2>
                </DetailsCard>
                </Fade>
                
            </DetailsWrapper>
        </DetailsContainer>
    )
}

export default Details
