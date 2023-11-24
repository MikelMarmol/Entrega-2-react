import React from 'react'
import image from '../../assets/MostFeaturedProducts-Imgs/MINIATURA 50.jpg';
import {ProductDiv, ProductImg,  ProductPieces, ProductBtn} from '../../styles/AllProductsPageStyles'

const NinthProduct = () => {
    return (
        <ProductDiv>  
                
                <ProductImg  
                src={image}
                alt="Daily Bugle (Spiderman)">
                </ProductImg>

                <ProductPieces>
                    Ataqué CON MAS DE 1000 ESQUELETOS en Clash of clans y pasó esto 💀
                </ProductPieces>

                <ProductBtn>
                    <a href="https://www.youtube.com/watch?v=pmEwh9isEFk&t=10s&ab_channel=MiguelCuervo20" target="_blank">Ver video</a>
                </ProductBtn>

            </ProductDiv>
    );
}

export default NinthProduct;