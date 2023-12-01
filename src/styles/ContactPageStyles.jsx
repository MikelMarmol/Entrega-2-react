import styled from 'styled-components';

export const Form = styled.form`
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    background-color: #333333;
    
    @media (max-width: 768px) {
        
    }`

export const DivInformation = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column; `

export const SecondDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #333333;
    height: 650px;
    border-radius: 8px;

    @media (max-width: 992px) {
        height: 850px;
    }

    @media (max-width: 768px) {
        
    } `

export const DivTitle = styled.h1`
    color: #ffffff;
    font-size: 35px;
    text-align: center;`

export const DivParagraph = styled.p`
    color: #ffffff;
    text-align: center;
    width: 80%;
    font-size: 18px; 
    @media (max-width: 400px) {
        width: 100%;
        font-size: 18px;
    } `

export const SecondParagraph = styled(DivParagraph)``

export const DivNamesForm = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center; 
    flex-direction: column;
    gap: 10px;
    padding: 10px; `

export const InputNames = styled.input`
    width: 50%;
    padding: 10px; 
    font-family: 'Assistant';
    border: 2px solid white;
    border-radius: 15px;
    background-color: #ff9500;
    
    @media (max-width: 992px) {
        width: 100%;
        font-size: 18px;
    } `

export const InputEmail = styled.input.attrs({
    type: 'email',
})`
    width: 50%;
    padding: 10px; 
    font-family: 'Assistant';
    border: 2px solid white;
    border-radius: 15px;
    background-color: #ff9500;
    
    @media (max-width: 992px) {
        width: 100%;
        font-size: 18px;
    } `

export const InputText = styled.textarea`
    width: 50%;
    height: 70px;
    padding: 10px;
    resize: none; 
    border: 2px solid white;
    border-radius: 15px;
    background-color: #ff9500;
    
    @media (max-width: 992px) {
        width: 100%;
        font-size: 18px;
    } `

export const SubmitButton = styled.button`
    padding: 10px;
    margin: 10px;
    width: 50%;
    cursor: pointer;
    color: #000000;
    font-weight: 800;
    text-transform: uppercase;
    border: 2px solid white;
    border-radius: 15px;
    background-color: #ff9500;
    
    &:hover {
        background-color: #e77620;
        
    } `

export const EmptyDiv = styled.div``