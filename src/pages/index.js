import React, { useState } from 'react';
import HeroLanding from '../components/HeroSection';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import InfoSection from '../components/InfoSection'
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data';
import Gallery from '../components/ImageSlider';
import Services from '../components/Details'
import Contact from '../components/Contact'
import Footer from '../components/Footer'


const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen = {isOpen} toggle = {toggle}/>
            <Navbar toggle ={toggle} />
            <HeroLanding />
            <Services />
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <InfoSection {...homeObjThree}/>
            <Gallery />
            <Contact />
            <Footer />
        </>
    );
};

export default Home;
