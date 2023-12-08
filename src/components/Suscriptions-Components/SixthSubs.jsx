import React from 'react'
import {SubCardContainer, SubCard, SubTitle, SubParagraph, SubButton, Price } from '../../styles/SuscriptionsPageStyles'


const SixthSubs = () => {
    return (

      <SubCardContainer>

            <SubCard>

                <SubTitle> 
                    TWITCH + VIP
                </SubTitle>

                <SubParagraph>
                    incluye:<br></br> <br></br>
                    - Suscrpcion a Twitch <br></br> <br></br>
                    - VIP en todos los canales
                </SubParagraph>

                <Price>
                 3 USD
                </Price>

                <SubButton>
                    Agregar al Carrito
                </SubButton>

            </SubCard>

        </SubCardContainer>

    );
}

export default SixthSubs;
