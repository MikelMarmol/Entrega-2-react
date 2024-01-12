import styled from 'styled-components';

export const SubContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
    background-color: #1b1b1b; `


export const Title = styled.h1`
    font-family: sans-serif;
    text-align: center;
    text-transform: uppercase; 
    color: white; `

export const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin: 10px;  
    `

export const SubCardContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center; 
    width: 100%;`

export const SubCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    background-color: gray;
    width: 90%;
    border-radius: 20px;
    padding: 15px;
    width: 400px;
    height: 400px;`

export const SubTitle = styled.h1`
    color: #ffffff;
    font-size: 30px;
    font-weight: 800;
    text-align: center; `

export const SubParagraph = styled.p`
    color: #ffffff;
    font-size: 18px;
    font-weight: 800; `

export const Price = styled.p`
    color: #ffffff;
    font-size: 18px;
    font-weight: 800; `


export const SubButton = styled.button`
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
