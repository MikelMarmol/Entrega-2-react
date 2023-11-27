import React from 'react'
import {AboutContainer, Title, CardContainer, Card, CardTitle, CerebroPhoto, AboutBtn} from '../../styles/AboutPageStyles'
import CerebroImage from '../../assets/AboutUs-Image/cerebro.png';

const FourthCard = () => { 
return (
    <Card>
        <CerebroPhoto 
            src={CerebroImage} 
            alt="Cerebro" >
        </CerebroPhoto>
        
        <CardTitle>
            Las sesiones de mentoría se realizan a través de una reunión en vivo, utilizando 
            una plataforma de videoconferencia ya sea Discord o Zoom. <br></br>
            Cada sesión tiene una duración estimada de entre 10 y 20 minutos, durante los cuales se 
            tratan diferentes temas para mejorar en CLASH OF CLANS.

            <AboutBtn>
               <a href='https://discord.gg/Qgk2atqYfq' target="_blank">Mas Informacion</a> 
            </AboutBtn>
        </CardTitle>
    </Card>
    )
}

export default FourthCard