import React from 'react'
import {SubContainer, CardContainer, Title } from './styles/SuscriptionsPageStyles'
import {Footer} from './components/Footer'
import FirstSubs from './components/Suscriptions-Components/FirstSubs'
import SecondSubs from './components/Suscriptions-Components/SecondSubs'
import ThirdSubs from './components/Suscriptions-Components/ThirdSubs'
import FourthSubs from './components/Suscriptions-Components/FourthSubs'
import FifthSubs from './components/Suscriptions-Components/FifthSubs'
import SixthSubs from './components/Suscriptions-Components/SixthSubs'
import SeventhSubs from './components/Suscriptions-Components/SeventhSubs'

export default function SubsPage() {
    return (
        <SubContainer>
            <Title>SUSCRIBITE</Title>
            <CardContainer>
                <FirstSubs />
                <SecondSubs />
                <ThirdSubs />
            </CardContainer>     

            <CardContainer>
                <FifthSubs />
                <SixthSubs />
                <FourthSubs />
            </CardContainer>    

             <CardContainer>
                <SeventhSubs />
            </CardContainer>    
            

            <Footer />
        </SubContainer>
    )
}