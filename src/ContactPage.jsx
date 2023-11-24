import React from 'react'
import { DivParagraph, DivTitle, DivInformation, SecondParagraph, SecondDiv, InputNames, DivNamesForm, InputEmail, InputText, SubmitButton, Form, EmptyDiv, } from './styles/ContactPageStyles'
import {Footer} from './components/Footer'

export default function ContactPage() {
    return (
        <EmptyDiv>
    <Form>
        
            <SecondDiv>
                 <DivInformation>
                    <DivTitle>Contactame</DivTitle>
                    <DivParagraph>Queres una colaboracion, tenes una idea para un video, queres patrocinarme o cualquier otra razon </DivParagraph>
                    <SecondParagraph>NO DUDES EN ESCRIBIRME</SecondParagraph>
                </DivInformation>

                <DivNamesForm>
                    <InputNames placeholder="Nombre"></InputNames>
                    <InputNames placeholder="Apellido"></InputNames> 
                    <InputEmail placeholder="Correo"></InputEmail>
                    <InputText placeholder="Asunto"></InputText>
                </DivNamesForm>

                <SubmitButton>Enviar</SubmitButton>
            </SecondDiv>


    </Form>

    <Footer />
    </EmptyDiv>
    )
}