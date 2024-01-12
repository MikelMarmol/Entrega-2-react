import React from "react";
import image from '../assets/MostFeaturedProducts-Imgs/MINIATURA 63.jpg'
import {HomeContainer, HomeCardContainer, HomeProducts, HomeTitle, HomeProductImg, HomeProductTitle, HomeProductBtn } from '../styles/MostFeaturedStyles'


export function MostFeatured() {
    return (
        <HomeContainer>
            <HomeTitle>
                VIDEO MAS RECIENTE
            </HomeTitle>

            <HomeCardContainer>
                <HomeProducts>
                    
                    <HomeProductImg  
                        src={image}
                        alt="ULTIMO VIDEO SUBIDO">
                    </HomeProductImg>

                        <HomeProductTitle>
                        ESTAS SON las MEJORES HABILIDADES para la REINA ARQUERA 🏹👑
                        </HomeProductTitle>

                        <HomeProductBtn>
                        <a href="https://www.youtube.com/watch?v=XUXhTD54rsw&ab_channel=MiguelCuervo20" target="_blank">IR A VER</a>
                        </HomeProductBtn>

                </HomeProducts>
            </HomeCardContainer>
        </HomeContainer>
    )
}