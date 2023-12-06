import styled from 'styled-components';

export const HeroContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;  `

export const HeroDiv = styled.div`
    background-repeat: no-repeat;
    width: 100%;`

export const HeroCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgb(255, 145, 0);
    border-top: 5px solid rgb(23, 23, 23);
    height: 600px;

    
    @media (max-width: 1000px) {
        height: 700px;
    }; 
    
    @media (max-width: 760px) {
        height: 750px;
    };
    
    @media (max-width: 500px) {
        height: 800px;
    };` 

export const HeroCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgb(255, 145, 0);
    width: 60%;
    margin-top: -200px;
    border-radius: 30px;
    border-top: 5px solid rgb(23, 23, 23); 
    
    @media (max-width: 440px) {
        width: 70%;
    };`

export const HeroTitle = styled.h2`
    text-align: center;
    font-size: 60px;
    color: white;
    margin-top: 100px;
    
    @media (max-width: 1510px) {
        font-size: 40px;
        text-align: center;
    };
    
    @media (max-width: 760px) {
        font-size: 30px;
        text-align: center;
    };
    
    @media (max-width: 640px) {
        font-size: 25px;
        text-align: center;
    };
    
    @media (max-width: 440px) {
        font-size: 20px;
        text-align: center;
    };
    
    @media (max-width: 310px) {
        font-size: 18px;
        text-align: center;
    };`

export const HeroParrafo = styled.p`
    color: #fff;
    font-size: 30px;
    font-weight: 500;
    margin-left: 15px; 
    
    @media (max-width: 1510px) {
        font-size: 25px;
    };
    
    @media (max-width: 760px) {
        font-size: 23px;
        text-align: center;
    };
    
    @media (max-width: 640px) {
        font-size: 20px;
        text-align: center;
    };
    
    @media (max-width: 440px) {
        font-size: 18px;
        text-align: center;
    };
    
    @media (max-width: 310px) {
        font-size: 15px;
        text-align: center;
    };`

export const VideoGameSpan = styled.span`
    color: #fff;
    font-size: 14px;
    font-weight: 800;
    margin: 20px;  `

export const VideoGamePurchaseDiv = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    color: #fff; 
    
    @media (max-width: 768px) {
        text-align: center;
    }; `

export const VideoGamePrice = styled.h3`
    font-weight: 800;`

export const VideoGamePurchaseBtn = styled.button`
    background-color: #d63d00;
    color: white;
    border: none;
    width: 60%;
    padding: 10px;
    border-radius: 10px;
    margin-top: 10px;
    cursor: pointer;
    font-weight: 800;
    text-transform: uppercase; 

    &:hover {
        background-color: #b63401;
    } 
    
    @media (max-width: 768px) {
        justify-content: center;
        margin: 0 auto;
    }; `

export const Negrita = styled.span`
    font-size: 30px;
    font-weight: 700;
    
    @media (max-width: 1510px) {
        font-size: 25px;
    };
    
    @media (max-width: 640px) {
        font-size: 20px;
    };
    
    @media (max-width: 440px) {
        font-size: 18px;
    };
    
    @media (max-width: 300px) {
        font-size: 15px;
    };`