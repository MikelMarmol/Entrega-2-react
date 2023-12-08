import React from 'react'
import {SubCardContainer, SubCard, SubTitle, SubParagraph, SubButton, Price } from '../../styles/SuscriptionsPageStyles'


const FifthSubs = () => {
    return (

      <SubCardContainer>

            <SubCard>

                <SubTitle> 
                    YOUTUBE + VIP
                </SubTitle>

                <SubParagraph>
                    incluye:<br></br> <br></br>
                    - Membresia de Youtube <br></br> <br></br>
                    - VIP en todos los canales
                </SubParagraph>

                <Price>
                     2.5 USD
                </Price>

                <SubButton>
                    Agregar al Carrito
                </SubButton>

            </SubCard>

        </SubCardContainer>

    );
}

export default FifthSubs;

