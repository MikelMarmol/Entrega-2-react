import React from 'react'
import image from '../../assets/MostFeaturedProducts-Imgs/MINIATURA 54.jpg';
import {ProductDiv, ProductImg, ProductPieces, ProductBtn} from '../../styles/AllProductsPageStyles'

const SixthProduct = () => {
    return (
        <ProductDiv>  
                
                <ProductImg  
                src={image}
                alt="Book Shop">
                </ProductImg>

                <ProductPieces>
                Desatando la MAGIA en Clash of Clans ¡Solo TROPAS MAGICAS!
                </ProductPieces>

                <ProductBtn>
                <a href="https://www.youtube.com/watch?v=yMn6l851x5Q&t=47s&ab_channel=MiguelCuervo20" target="_blank">Ver video</a>
                </ProductBtn>

        </ProductDiv>
    );
}

export default SixthProduct;