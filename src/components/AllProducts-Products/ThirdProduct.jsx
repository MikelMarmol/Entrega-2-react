import React from 'react'
import ThirdImage from '../../assets/MostFeaturedProducts-Imgs/MINIATURA 55.jpg';
import {ProductDiv, ProductImg, ProductPieces, ProductBtn} from '../../styles/AllProductsPageStyles'

const ThirdProduct = () => {
    return (
        <ProductDiv>  
                

                <ProductImg  
                src={ThirdImage}
                alt="Up House">
                </ProductImg>

                <ProductPieces>
                MEJORO mi CENTINELA 6 niveles en un SOLO VÍDEO - De Centinela ordinario a uno extraordinario 🧙‍♂️📈
                </ProductPieces>

                <ProductBtn>
                <a href="https://www.youtube.com/watch?v=caSFNSC4OgA&t=9s&ab_channel=MiguelCuervo20" target="_blank">Ver video</a>
                </ProductBtn>

            </ProductDiv>
    );
}

export default ThirdProduct;