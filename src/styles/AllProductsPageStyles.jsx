import styled, { keyframes } from 'styled-components';


export const HeroContainer = styled.div`
    width: 100%;
    padding: 0px 20px 0px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
    background-color: #f9f9f9;

    @media (max-width: 768px) {
        width: 100%;
        padding: 0px;
    }; 
    
    @media (max-width: 992px) {
        padding: 0px;
}; `

export const ProductsTitle = styled.h1`
    font-family: sans-serif;
    text-align: center;
    text-transform: uppercase; 
    
    @media (max-width: 768px) {
        width: 100%;
    }; `

export const ProductsContainer = styled.div`
    display: flex;
    gap: 70px;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 20px;
    background-color: #f9f9f9;
    
    @media (max-width: 768px) {
        flex-direction: column;
    }; `

export const ProductDiv = styled.div`
    background-color: rgba(255, 145, 0, 0.922);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 50px;
    width: 40%;
    border: 2px;
    border-style: solid;
    border-radius: 20px;
    border-color: brown;
    padding: 20px 5px 20px 5px;
    
    @media (max-width: 768px) {
        width: 350px;
}; `

export const ProductsInfoDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px; `

export const TitleSection = styled.h2`
    text-align: center;
    font-weight: 800;
    font-size: 24px; 
    padding: 0px 0px 20px 0px;`

const fadeIn = keyframes`
from {
    padding: 20px;
}
to {
    padding: 4px;
} `

export const ProductImg = styled.img`
    width: 90%;
    border: 2px solid brown;
    border-radius: 20px;

   
    @media (max-width: 360px) {
        width: 285px;
    }; `

export const ProductName = styled.h3`
    font-size: 22px; 
    `

export const ProductPieces = styled.p`
    color: white;
    font-weight: 800;
    font-size: 18px;
    text-align: center;
    margin-bottom: 10px;
    width: 75% `

export const ProductBtn = styled.button`
    padding: 10px;
    cursor: pointer;
    color: white;
    text-transform: uppercase;
    font-weight: 800;
    border: 2px solid brown;
    border-radius: 20px;
    margin-bottom: 10px;
    text-align: center;
    background-color: #ffffff;
    
    &:hover {
        background-color: brown;
        color: #fff;
    }`
