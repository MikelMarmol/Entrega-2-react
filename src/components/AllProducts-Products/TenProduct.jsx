import React from 'react'
import ThirdImage from '../../assets/MostFeaturedProducts-Imgs/MINIATURA 57.jpg';
import {ProductDiv, ProductImg, ProductPieces, ProductBtn} from '../../styles/AllProductsPageStyles'

const TenProduct = () => {
    return (
        <ProductDiv>  
                
                <ProductImg  
                src={ThirdImage}
                alt="Up House">
                </ProductImg>

                <ProductPieces>
                El CALENDARIO DE NOVIEMBRE ya esta AQUÍ - ¿Nos regalan un skin? Clash of clans
                </ProductPieces>

                <ProductBtn>
                <a href="https://www.youtube.com/watch?v=UzP4uzG14kU&t=57s&ab_channel=MiguelCuervo20" target="_blank">Ver video</a>
                </ProductBtn>

            </ProductDiv>
    );
}

export default TenProduct;