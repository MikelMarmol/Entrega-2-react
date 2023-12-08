import React from 'react'
import {SubCardContainer, SubCard, SubTitle, SubParagraph, SubButton, Price } from '../../styles/SuscriptionsPageStyles'

const SecondSubs = () => {
    return (
        <SubCardContainer>

            <SubCard>

                <SubTitle> 
                    MIEMBRO DE YOUTUBE
                </SubTitle>

                <SubParagraph>
                    Suscripcion clasica a Youtube incluye:<br></br> <br></br>
                    - Acceso al chat solo para Miembros <br></br> <br></br>
                    - Emoji e insigias que te distinge del resto <br></br> <br></br>
                    - Respuesta prioritaria a los comenatarios
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

export default SecondSubs;