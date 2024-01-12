import DesktopImage from '../assets/Hero-Section-Imgs/Coc.png'
import styled from 'styled-components';

export const HeroContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center; 
    
    @media (max-width: 768px) {
        width: 100%;
        padding: 0px;
    }; 
    
    @media (max-width: 992px) {
        padding: 0px;
};  `

export const HeroDiv = styled.div`
    background-image: url(${DesktopImage});
    background-position: center;   
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    width: 100%;
    height: 700px; 
    
    @media (max-width: 768px) {
    width: 100%;}; `

export const HeroTitle = styled.h2`
    font-size: 30px;
    padding: 20px;
    margin: 70px 0px 0px 70px;  `

export const HeroParagraph = styled.p`
    font-size: 20px;
    padding: 20px;
    font-weight: 600;
    margin: 0px 0px 0px 70px; `

export const BtnDiv = styled.div`
    padding: 20px;
    margin: 0px 0px 0px 70px; `

export const HeroBtn = styled.a`
    background-color: black;
    padding: 10px;
    color: #fff;
    font-size: 17px;
    font-weight: 800;
    cursor: pointer; 
    border-radius: 7px; 
    position: relative;

&::after {
    content: '->'; 
    margin-left: 5px; 
    }

&:hover {
    background-color: white;
    color: black;
    } `;





