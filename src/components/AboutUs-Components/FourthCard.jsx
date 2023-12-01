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
            Mentorías a través de reuniones en vivo, utilizando 
            una plataforma de videoconferencia ya sea Discord o Zoom. <br></br>
            las cuales se te ayudan a mejorar en CLASH OF CLANS.

            <AboutBtn>
               <a href='https://discord.gg/Qgk2atqYfq' target="_blank">Mas Informacion</a> 
            </AboutBtn>
        </CardTitle>
    </Card>
    )
}

export default FourthCard