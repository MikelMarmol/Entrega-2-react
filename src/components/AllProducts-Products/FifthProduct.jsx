import React from 'react'
import FifthImage from '../../assets/MostFeaturedProducts-Imgs/MINIATURA 63.jpg';
import {ProductDiv, ProductImg,  ProductPieces, ProductBtn} from '../../styles/AllProductsPageStyles'

const FifthProduct = () => {
    return (
        <ProductDiv>  
                
                <ProductImg  
                src={FifthImage}
                alt="Alpine Lodge">
                </ProductImg>

                <ProductPieces>
                LOS MEJORES EJERCITOS PARA TH 13 - DESTRUYE A CUALQUIER TH13 CON ELLOS
                </ProductPieces>

                <ProductBtn>
                <a href="https://www.youtube.com/watch?v=6IWIq56O884&t=1s&ab_channel=MiguelCuervo20" target="_blank">Ver video</a>
                </ProductBtn>

            </ProductDiv>
    );
}

export default FifthProduct;