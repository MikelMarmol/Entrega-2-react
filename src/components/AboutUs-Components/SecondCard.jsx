import React from 'react'
import {AboutContainer, Title, CardContainer, Card, CardTitle, TwitchPhoto, AboutBtn} from '../../styles/AboutPageStyles'
import TwitchImage from '../../assets/AboutUs-Image/TwitchLogo.png';



const SecondCard = () => {
    return (
        <Card>
            <TwitchPhoto 
                src={TwitchImage}
                alt="TwitchLogo">
            </TwitchPhoto>
            
            <CardTitle> Directos todos los LUNES - MIERCOLES - 
                VIERNES A LAS 16HS DE ARGENTINA, te espero para 
                echarnos unas risas en mi canal de TWITCH.

                <AboutBtn>
                   <a href='https://www.twitch.tv/miguelcuervo20' target="_blank">Ver Mas</a> 
                </AboutBtn>
            
            </CardTitle>
        </Card>
    )
}

export default SecondCard