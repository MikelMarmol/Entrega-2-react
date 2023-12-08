import React from 'react'
import {SubCardContainer, SubCard, SubTitle, SubParagraph, SubButton, Price } from '../../styles/SuscriptionsPageStyles'


const SeventhSubs = () => {
    return (

      <SubCardContainer>

            <SubCard>

                <SubTitle> 
                    ULTRA SUSCRIPSION
                </SubTitle>

                <SubParagraph>
                    incluye:<br></br> <br></br>
                    - Suscrpcion a Twitch <br></br> <br></br>
                    - Membresia de Youtube <br></br> <br></br>
                    - VIP en todos los canales
                </SubParagraph>

                <Price>
                     5 USD
                </Price>

                <SubButton>
                    Agregar al Carrito
                </SubButton>

            </SubCard>

        </SubCardContainer>

    );
}

export default SeventhSubs;