import React from "react";
import {FooterContainer, FooterHr, FooterP, FooterUl, FooterLi} from '../styles/FooterStyles'

export function Footer() {
    return (
        <FooterContainer id="footer">
            
                <FooterUl>
                    <FooterLi>
                        Novedades
                    </FooterLi>

                    <FooterLi>
                        Ayuda
                    </FooterLi>

                    <FooterLi>
                        Politicas de Privacidad
                    </FooterLi>

                    <FooterLi>
                        Terminos y condiciones
                    </FooterLi>

                    <FooterLi>
                        Politicas de Cookies
                    </FooterLi>
                </FooterUl>

            <FooterHr></FooterHr> 

            <FooterP>
                 Desarrollado por Mikel Marmol
            </FooterP>
        </FooterContainer>
    )
}