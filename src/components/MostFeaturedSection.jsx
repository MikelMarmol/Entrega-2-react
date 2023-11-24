import React from "react";
import image from '../assets/MostFeaturedProducts-Imgs/MINIATURA 63.jpg'
import {HomeContainer, HomeCardContainer, HomeProducts, HomeTitle, HomeProductImg, HomeProductTitle, } from '../styles/MostFeaturedStyles'


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
                        alt="LEGO of Ahsoka (Star Wars)">
                    </HomeProductImg>

                        <HomeProductTitle>
                            LOS MEJORES EJERCITOS PARA TH 13 - DESTRUYE A CUALQUIER TH13 CON ELLOS
                        </HomeProductTitle>

                        <HomeProductBtn>
                        <a href="https://www.youtube.com/watch?v=6IWIq56O884&t=1s&ab_channel=MiguelCuervo20" target="_blank">IR A VER</a>
                        </HomeProductBtn>

                </HomeProducts>
            </HomeCardContainer>
        </HomeContainer>
    )
}