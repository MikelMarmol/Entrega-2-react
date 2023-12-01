import styled from 'styled-components';


export const TwitchPhoto = styled.img`
    width: 160px;

    @media (max-width: 1125px) {
        width: 130px;
    }

    @media (max-width: 710px) {
        width: 110px;
    }`

export const DiscordPhoto = styled.img`
    width: 210px;
    
    @media (max-width: 1125px) {
        width: 180px;
    } 
    
    @media (max-width: 710px) {
        width: 160px;
    }`

export const CerebroPhoto = styled.img`
    width: 170px;

    @media (max-width: 1125px) {
        width: 140px;
    }
    
    @media (max-width: 710px) {
        width: 120px;
    }`


export const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    background-color: #f9f9f9; `
    

export const Title = styled.h1`
    color: #333;
    font-size: 2.5em;
    font-weight: 800; `

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;  
    width: 100%;`

export const Card = styled.div`
    width: 70%;
    height: 250px;
    background-color: #323232;
    margin: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    padding: 0px 50px 0px 100px;
    gap: 100px;
    border-radius: 20px;
    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.452); 

    @media (max-width: 1125px) {
        width: 90%;
    } 
    
    @media (max-width: 965px) {
        gap: 5px;
    }
    
    @media (max-width: 710px) {
        padding: 0px 20px 0px 20px;
    }
    
    @media (max-width: 500px) {
        flex-direction: column;
        justify-content: center;
        height: 370px;
    }`

export const CardTitle = styled.h2`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    color: #ffffff; 
    font-size: 20px;
    text-align: center;
    margin: 10px;
    font-weight: 600;

    @media (max-width: 965px) {
        gap: 20px;
        margin: 5px;
    }

    @media (max-width: 710px) {
        font-size: 16px;
        margin: 5px;
    }`

export const AboutBtn = styled.button`
padding: 10px;
cursor: pointer;
color: #000000;
text-transform: uppercase;
font-weight: 800;
border: 2px solid rgba(255, 145, 0, 0.922);
border-radius: 20px;
margin-bottom: 10px;
text-align: center;
background-color: #ffffff;

&:hover {
        background-color: rgba(255, 145, 0, 0.922);
        color: #fff;
    }`

export const TitleContainer = styled.div``

export const ExtraTitle = styled.h3`
    color: #333;
    font-size: 1.7em;
    text-align: center; `

export const SecondCardContainer = styled(CardContainer)`
    padding: 20px;`

