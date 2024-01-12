import React from 'react'
import {HeroContainer, HeroDiv, HeroCardContainer, HeroCard, HeroTitle, HeroParrafo, Negrita} from '../styles/SecondHeroStyles'

export function SecondHeroSection() {
    return (
    <HeroContainer id="Home">
    <HeroDiv>
        <HeroCardContainer>
            <HeroCard>

                <HeroTitle>
                    ¿Quien es MIGUELCUERVO20?
                </HeroTitle> 

                <HeroParrafo>
                    Mi nombre es Mikel Marmol tengo 21 años y actualmente me encuentro estudiando programacion. 
                    Como hobbie soy youtuber, mi canal es <Negrita>"MiguelCuervo20"</Negrita>, un canal de videojuegos 
                    y entretenimiento. En el que normlamente jugamos un juego de celular 
                    llamado <Negrita>Clash of clans</Negrita> que vendria a ser el nicho del canal. <br></br>
                    Inicie a hacer videos ya que me gustaba editar tanto videos como imagenes, de esta
                    forma ademas de divertirme podia practicar y mejorar mis habilidades en estos ambitos . <br></br>
                    Actualmente mi canal de youtube cuenta con mas de 1300 suscriptores y con mas de 100 video subidos.
                </HeroParrafo>

            </HeroCard>
        </HeroCardContainer>
    </HeroDiv>
    </HeroContainer>
    )
}