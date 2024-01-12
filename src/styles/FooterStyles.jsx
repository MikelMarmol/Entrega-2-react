import styled from 'styled-components';

export const FooterContainer = styled.footer`
    background-color: rgb(36, 36, 36);
    width: 100%;
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media (max-width: 768px) {
        width: 100%;
    }; `

export const FooterHr = styled.hr`
    width: 100%;
    border: 1px solid #333; `

export const FooterP = styled.p`
    font-size: 17px;
    color: rgb(104, 104, 104);
    text-align: center;
    font-weight: 600;
    
    @media (max-width: 992px) {
        font-size: 20px;
    };`

export const FooterUl = styled.ul`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    font-weight: bold;
    gap: 10px; 
    
    @media (max-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: center;
    }; `


export const FooterLi = styled.li`
    color: rgb(104, 104, 104);
    cursor: pointer;


    &:hover {
        color: white;
    }
    
    @media (max-width: 768px) {
        padding: 0px;
        align-items: center;
    }; 
    
    @media (max-width: 992px) {
        font-size: 19px;
    };`