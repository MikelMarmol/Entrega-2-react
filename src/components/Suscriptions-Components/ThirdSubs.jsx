import React from 'react'
import {SubCardContainer, SubCard, SubTitle, SubParagraph, SubButton, Price } from '../../styles/SuscriptionsPageStyles'

const ThirdSubs = () => {
    return (
       
<SubCardContainer>

    <SubCard>

        <SubTitle> 
            SUSCRIPSION A TWITCH
        </SubTitle>

        <SubParagraph>
            Suscripcion clasica a Twitch incluye:<br></br> <br></br>
            - Acceso al chat solo para Suscriptores. <br></br> <br></br>
            - Streams sin publicidad (con excepciones limitadas). <br></br> <br></br>
            - Emoji e insigias que te distinge del resto.
        </SubParagraph>

        <Price>
         2 USD
        </Price>

        <SubButton>
            Agregar al Carrito
        </SubButton>

    </SubCard>

</SubCardContainer>
    );
}

export default ThirdSubs;