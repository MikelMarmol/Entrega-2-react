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

            Unete al DISCORD de la comunidad para divertirte y ser el primero en 
            enterarte cuando hay video y cuando hago directo.

            <AboutBtn>
               <a href='https://discord.gg/ACa4hvdNx6' target="_blank">Unirse</a> 
            </AboutBtn>
        </CardTitle>
    </Card>
    )
}

export default ThirdCard