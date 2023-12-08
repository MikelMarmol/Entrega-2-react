import React from 'react'
import {AboutContainer, Title, CardContainer, Card, CardTitle, YoutubePhoto, AboutBtn} from '../../styles/AboutPageStyles'
import YoutubeLogo from '../../assets/AboutUs-Image/YoutubeLogo.webp';

const FirstCard = () => { 
return (
    <Card>
        <YoutubePhoto
            src={YoutubeLogo} 
            alt="Cerebro" >
        </YoutubePhoto>
        
        <CardTitle>
            Veni a ver todos mis videos a mi canal de Youtube, encontra el video que neceistas para mejorar en Clash of clans.

            <AboutBtn>
               <a href='https://www.youtube.com/channel/UCEjTU5V5LiwUJaqBMKlw-PQ' target="_blank">Ir a Ver</a> 
            </AboutBtn>
        </CardTitle>
    </Card>
    )
}

export default FirstCard