import React from 'react'
import SecondProductImg from '../../assets/MostFeaturedProducts-Imgs/MINIATURA 52.jpg';
import {ProductDiv, ProductImg, ProductPieces, ProductBtn} from '../../styles/AllProductsPageStyles'

const SecondProduct = () => {
    return (
        <ProductDiv>  
                

                <ProductImg  
                src={SecondProductImg}
                alt="LEGO of AT-AT (Star Wars)">
                </ProductImg>

                <ProductPieces>
                 Los TH12 te pedirán POR FAVOR que pares ¡El ATAQUE MAS EPICO de Clash of clans!
                </ProductPieces>

                <ProductBtn>
                <a href="https://www.youtube.com/watch?v=IiOCz7WX1ZI&t=30s&ab_channel=MiguelCuervo20" target="_blank">Ver video</a>
                </ProductBtn>

            </ProductDiv>
    );
}

export default SecondProduct;