import React from 'react'
import ThirdImage from '../../assets/MostFeaturedProducts-Imgs/MINIATURA 61.jpg';
import {ProductDiv, ProductImg, ProductPieces, ProductBtn} from '../../styles/AllProductsPageStyles'

const ThirteenProduct = () => {
    return (
        <ProductDiv>  
                

                <ProductImg  
                src={ThirdImage}
                alt="Up House">
                </ProductImg>

                <ProductPieces>
                EJERCITO IMPOSIBLE solo puedo UTILIZAR tropas de color VIOLETA 🟣😈
                </ProductPieces>

                <ProductBtn>
                <a href="https://www.youtube.com/watch?v=ScLkca3r6UE&t=82s&ab_channel=MiguelCuervo20" target="_blank">Ver video</a>
                </ProductBtn>

            </ProductDiv>
    );
}

export default ThirteenProduct;