import React from 'react'
import {HeroContainer, ProductsContainer,ProductsTitle} from './styles/AllProductsPageStyles'
import {Footer} from './components/Footer'
import OneProduct from './components/AllProducts-Products/OneProduct'
import SecondProduct from './components/AllProducts-Products/SecondProduct'
import ThirdProduct from './components/AllProducts-Products/ThirdProduct'
import FourthProduct from './components/AllProducts-Products/FourthProduct'
import FifthProduct from './components/AllProducts-Products/FifthProduct'
import SixthProduct from './components/AllProducts-Products/SixthProduct'
import SeventhProduct from './components/AllProducts-Products/SeventhProduct'
import EigthProduct from './components/AllProducts-Products/EigthProduct'
import NinthProduct from './components/AllProducts-Products/NinthProduct'
import TenProduct from './components/AllProducts-Products/TenProduct'
import ElevenProduct from './components/AllProducts-Products/ElevenProduct'
import TwelveProduct from './components/AllProducts-Products/TwelveProduct'  
import ThirteenProduct from './components/AllProducts-Products/ThirteenProduct'


export default function ContactPage() {
    return (
        <HeroContainer>

            <ProductsTitle>
               TODOS MIS VIDEOS
            </ProductsTitle>

        <ProductsContainer>
            <OneProduct />
            <SecondProduct />
            <ThirdProduct />
            <FourthProduct />
            <FifthProduct />
            <SixthProduct />
            <SeventhProduct />
            <EigthProduct />
            <NinthProduct />
            <TenProduct />
            <ElevenProduct />
            <TwelveProduct />
            <ThirteenProduct />
        </ProductsContainer>

            <Footer />
        </HeroContainer>
    )
}