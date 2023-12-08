import React from 'react'
import {SubCardContainer, SubCard, SubTitle, SubParagraph, SubButton, Price } from '../../styles/SuscriptionsPageStyles'

const FirstSubs = () => {
    return (
        <SubCardContainer>

            <SubCard>

                <SubTitle> 
                    VIPS
                </SubTitle>

                <SubParagraph>
                    VIP en Youtube, Twitch y Discord, incluye:<br></br> <br></br>
                    - Canal especial en Discord <br></br> <br></br>
                    - Desbloquea nuevos emojis unicos <br></br> <br></br>
                    - Insigias te distinge del resto <br></br> <br></br>
                    
                </SubParagraph>

                <Price>
                   1.5 USD
                </Price>

                <SubButton>
                    Agregar al Carrito
                </SubButton>

            </SubCard>

        </SubCardContainer>
    );
}

export default FirstSubs;