import React from 'react'
import {SubCardContainer, SubCard, SubTitle, SubParagraph, SubButton, Price } from '../../styles/SuscriptionsPageStyles'


const FourthSubs = () => {
    return (

      <SubCardContainer>

            <SubCard>

                <SubTitle> 
                    SUSCRIPSION TOTAL
                </SubTitle>

                <SubParagraph>
                    incluye:<br></br> <br></br>
                    - Membresia de Youtube <br></br> <br></br>
                    - Suscripsions a Twitch 
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

export default FourthSubs;

