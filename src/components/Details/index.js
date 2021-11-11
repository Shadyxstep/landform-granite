import React from 'react'
import Icon1 from '../../images/svg-1.svg'
import Icon3 from '../../images/svg-3.svg'
import { DetailsContainer, DetailsH1, DetailsWrapper, DetailsCard, DetailsIcon, DetailsH2, DetailsP } from './DetailElements'

const Details = () => {
    return (
        <DetailsContainer id="details" className="details">
            <DetailsH1>Quick Navigation</DetailsH1>
            <DetailsWrapper>
                <DetailsCard to="about">
                    <DetailsIcon src={Icon1}/>
                    <DetailsH2>About</DetailsH2>
                    <DetailsP></DetailsP>
                </DetailsCard>
                <DetailsCard to='gallery'>
                    <DetailsIcon src={Icon1}/>
                    <DetailsH2>Photos</DetailsH2>
                    <DetailsP></DetailsP>
                </DetailsCard>
                <DetailsCard to='contact'>
                    <DetailsIcon src={Icon3}/>
                    <DetailsH2>Contact</DetailsH2>
                    <DetailsP></DetailsP>
                </DetailsCard>
            </DetailsWrapper>
        </DetailsContainer>
    )
}

export default Details
