import React from 'react'
import {AboutContainer, Title, CardContainer, Card, CardTitle, DiscordPhoto, AboutBtn} from '../../styles/AboutPageStyles'
import DiscordImage from '../../assets/AboutUs-Image/DiscordLogo.webp';

const ThirdCard = () => { 
return (
    <Card>
        <DiscordPhoto 
            src={DiscordImage} 
            alt="DiscordLogo" >
        </DiscordPhoto>
        
        <CardTitle>
            UNETE AL DISCORD DE LA COMUNIDAD PARA DIVERTIRTE Y SER EL PRIMERO EN 
            ENTERARTE CUANDO HAY VIDEO NUEVO Y CUNADO HAGO DIRECTO. 
            ADEMAS DE DISFRUTAR DE LA VARIEDAD DE CANALES DENTRO DEL MISMO.

            <AboutBtn>
               <a href='https://discord.gg/ACa4hvdNx6' target="_blank">Unirse</a> 
            </AboutBtn>
        </CardTitle>
    </Card>
    )
}

export default ThirdCard