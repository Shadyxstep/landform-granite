import React from 'react'
import Building from '../../images/building.png'
import Construction from '../../images/svg-building.png'
import Cladding from '../../images/cladding.png'
import Monument from '../../images/obelisk.png'
import Paving from '../../images/paving.png'
import Boulder from '../../images/boulder.png'
import Feature from '../../images/features.png'
import Wall from '../../images/wall.png'
import "../Details/styles.css"
import { DetailsContainer, DetailsH1, DetailsWrapper, DetailsCard, DetailsIcon, DetailsH2} from './DetailElements'

const Details = () => {

    return (
        <DetailsContainer id="details" className="details">
            <DetailsH1>Our Granite is suitable for</DetailsH1>
            <DetailsWrapper>
                <DetailsCard>
                        <DetailsIcon src={Building}/>
                        <DetailsH2>Building</DetailsH2>
                </DetailsCard>
                <DetailsCard to='gallery'>
                    <DetailsIcon src={Construction}/>
                    <DetailsH2>Construction</DetailsH2>
                </DetailsCard>
                <DetailsCard to='contact'>
                    <DetailsIcon src={Cladding}/>
                    <DetailsH2>Cladding</DetailsH2>
                </DetailsCard>
                <DetailsCard to="about">
                    <DetailsIcon src={Monument}/>
                    <DetailsH2>Monuments</DetailsH2>
                </DetailsCard>
                <DetailsCard to="about">
                    <DetailsIcon src={Paving}/>
                    <DetailsH2>Paving</DetailsH2>
                </DetailsCard>
                <DetailsCard to="about">
                    <DetailsIcon src={Boulder}/>
                    <DetailsH2>Boulders</DetailsH2>
                </DetailsCard>
                <DetailsCard to="about">
                    <DetailsIcon src={Feature}/>
                    <DetailsH2>Features</DetailsH2>
                </DetailsCard>
                <DetailsCard to="about">
                    <DetailsIcon src={Wall}/>
                    <DetailsH2>Walls</DetailsH2>
                </DetailsCard>
            </DetailsWrapper>
        </DetailsContainer>
    )
}

export default Details
