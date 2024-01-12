import React from 'react'
import { DivParagraph, DivTitle, ErrorStyled, DivInformation, SecondParagraph, SecondDiv, InputNames, DivNamesForm, InputEmail, InputText, SubmitButton, Form, EmptyDiv, } from './styles/ContactPageStyles'
import {Footer} from './components/Footer'
import { useFormik } from 'formik'
import * as Yup from 'yup';

//   Validacion

const validationSchema = Yup.object({
    name: Yup.string().trim().min(2, "Minimo 2 Caracteres").required("Obligatorio"),
    surname: Yup.string().trim().min(2, "Minimo 2 Caracteres").required("Obligatorio"),
    email: Yup.string()
        .email("Correo Invalido")
        .required("Obligatorio"),
    comments: Yup.string().max(100, "Sobre paso el maximo de caracteres").required("Obligatorio")
});


export default function ContactPage() {

    const { getFieldProps, handleSubmit, errors, touched } = useFormik ({
        initialValues: {
            name:"",
            surname:"",
            email:"",
            comments:""
        },
        validationSchema,
        onSubmit: (values, { resetForm }) => {
            resetForm();
        }
    })


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
                    <InputNames placeholder="Nombre"
                    name="name"
                    label="Nombre"
                    type="text"
                    isError={touched.name && errors.name}
                    {...getFieldProps("name")}
                    >
                    </InputNames>


                    <InputNames placeholder="Apellido"
                    name="surname"
                    label="Apellido"
                    type="text"
                    isError={touched.surname && errors.surname}
                    {...getFieldProps("surname")}>
                    </InputNames> 

                    <InputEmail placeholder="Correo"
                     name="email"
                     label="Email"
                     isError={touched.email && errors.email}
                     {...getFieldProps("email")}>
                    </InputEmail>

                    <InputText placeholder="Asunto"
                    name="comments"
                    label="Asunto"
                    isError={touched.comments && errors.comments}
                    {...getFieldProps("comments")}>
                    </InputText>
                   

                </DivNamesForm>

                <SubmitButton onClick={handleSubmit} type="button">Enviar</SubmitButton>
            </SecondDiv>

   

    </Form>
    
    

    <Footer />
    </EmptyDiv>
    )
}