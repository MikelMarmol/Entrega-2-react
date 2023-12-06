import styled, { keyframes } from 'styled-components';

export const HomeContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column; 
    padding: 20px 30px; 
    width: 100%; `

export const HomeCardContainer = styled.div`
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
    background-color: #FD8024; 
    border-radius: 20px;
    flex-wrap: wrap;
    padding: 20px;
    
    @media (max-width: 768px) {
        padding: 20px;
        gap: 20px;
    };`

export const HomeProducts = styled.div`
    display: flex;
    flex-direction: column;
    align-items: right;
    justify-content: center;
    background-color: #FD8024;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1); 
    
    @media (max-width: 360px) {
        padding: 5px;
    }; `

export const ProductsExclusiveDiv = styled.div`
    margin-top: 7px;
    padding: 5px;
    border-radius: 5px;
    color: black;
    font-weight: 800;
    text-align: right; `

export const ProductsInfoDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px; 
    flex-wrap: wrap;
    
    @media (max-width: 360px) {
        padding: 10px;
    }; `

export const HomeTitle = styled.h2`
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
}
`;

export const HomeProductImg = styled.img`
    width: 100%;
    border: 2px solid brown;
    border-radius: 20px;`

export const ProductName = styled.h3`
    font-size: 22px; `

export const HomeProductTitle = styled.p`
    font-weight: 800;
    font-size: 18px;
    text-align: center;
    margin-bottom: 10px; 
    
    @media (max-width: 400px) {
        font-size: 15px;
    };`

export const HomeProductBtn = styled.button`
    padding: 10px;
    border: none;
    cursor: pointer;
    color: white;
    text-transform: uppercase;
    font-weight: 800;
    border: 2px solid brown;
    border-radius: 5px;
    margin-bottom: 10px;
    text-align: center;
    background-color: white;
    
    &:hover {
        background-color: brown;
        color: #fff;
    }`

export const ExclusiveTag = styled.span`
    padding: 5px;
    background-color: #F2F2F2;
    border-left: 2px solid orange;`