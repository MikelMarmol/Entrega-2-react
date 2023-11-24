import React from 'react'
import ThirdImage from '../../assets/MostFeaturedProducts-Imgs/MINIATURA 59.jpg';
import {ProductDiv, ProductImg, ProductPieces, ProductBtn} from '../../styles/AllProductsPageStyles'

const TwelveProduct = () => {
    return (
        <ProductDiv>  
                

                <ProductImg  
                src={ThirdImage}
                alt="Up House">
                </ProductImg>

                <ProductPieces>
                ALVARO 845 me DESAFÍA a usar un EJERCITO TROLL y pasa esto
                </ProductPieces>

                <ProductBtn>
                <a href="https://www.youtube.com/watch?v=Hl2rgdSiKn8&ab_channel=MiguelCuervo20" target="_blank">Ver video</a>
                </ProductBtn>

            </ProductDiv>
    );
}

export default TwelveProduct;