import React from 'react'
import FourthImage from '../../assets/MostFeaturedProducts-Imgs/MINIATURA 69.jpg';
import {ProductDiv, ProductImg, ProductPieces, ProductBtn} from '../../styles/AllProductsPageStyles'

const FourthProduct = () => {
    return (
        <ProductDiv>  
                
                <ProductImg  
                src={FourthImage}
                alt="Jazz Club">
                </ProductImg>

                <ProductPieces>
                MEJORES BASES DE GUERRA para TH13 - NI LOS TH14 PUEDEN CON ELLAS
                </ProductPieces>

                <ProductBtn>
                <a href="https://www.youtube.com/watch?v=hY2GddbpSQs&t=8s&ab_channel=MiguelCuervo20" target="_blank">Ver video</a>
                </ProductBtn>

            </ProductDiv>
    );
}

export default FourthProduct;