import React from 'react'
import {AboutContainer, Title, CardContainer, Card, CardTitle, ExtraTitle, TitleContainer, SecondCardContainer } from './styles/AboutPageStyles'
import SecondCard from './components/AboutUs-Components/SecondCard'
import ThirdCard from './components/AboutUs-Components/ThirdCard'
import FourthCard from './components/AboutUs-Components/FourthCard'
import {Footer} from './components/Footer'
import FirstCard from './components/AboutUs-Components/FirstCard'

export default function AboutPage() {
    return (
        <AboutContainer>
            <Title>SOBRE MI</Title>
            <CardContainer>
                <FirstCard />
                <SecondCard />
                <ThirdCard />
                <FourthCard />
            </CardContainer>  

            <TitleContainer>
                <ExtraTitle></ExtraTitle>
            </TitleContainer>
            <Footer />
        </AboutContainer>
    )
}