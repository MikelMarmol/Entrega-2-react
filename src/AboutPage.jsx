import React from 'react'
import {AboutContainer, Title, CardContainer, Card, CardTitle, ImageContainer, ExtraTitle, TitleContainer, SecondCardContainer } from './styles/AboutPageStyles'
import SecondCard from './components/AboutUs-Components/SecondCard'
import ThirdCard from './components/AboutUs-Components/ThirdCard'
import FourthCard from './components/AboutUs-Components/FourthCard'
import FifthCard from './components/AboutUs-Components/FifthCard'
import SixthProduct from './components/AboutUs-Components/SixthProduct'
import SeventhCard from './components/AboutUs-Components/SeventhCard'
import EigthCard from './components/AboutUs-Components/EigthCard'
import NinthCard from './components/AboutUs-Components/NinthCard'
import {Footer} from './components/Footer'

export default function AboutPage() {
    return (
        <AboutContainer>
            <ImageContainer></ImageContainer>

            <Title>SOBRE MI</Title>
            <CardContainer>
                <Card>
                    <CardTitle></CardTitle>
                </Card>

                <SecondCard />
                <ThirdCard />
                <SixthProduct />
                <SeventhCard />
                <EigthCard />
            </CardContainer>  

            <TitleContainer>
                <ExtraTitle></ExtraTitle>
            </TitleContainer>

            <SecondCardContainer>
            <FourthCard />
            <FifthCard />
            <NinthCard />
            </SecondCardContainer>

            <Footer />
        </AboutContainer>
    )
}