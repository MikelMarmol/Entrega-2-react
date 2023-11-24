import React from 'react'
import image from '../../assets/MostFeaturedProducts-Imgs/MINIATURA 53.jpg';
import {ProductDiv, ProductImg, ProductPieces, ProductBtn} from '../../styles/AllProductsPageStyles'

const SeventhProduct = () => {
    return (
        <ProductDiv>  
                

                <ProductImg  
                src={image}
                alt="Imperial Tie (Star Wars)">
                </ProductImg>

                <ProductPieces>
                    Mis GLOBOS MAGMATICOS van directo al AYUNTAMIENTO - La MEJOR ESTRATEGIA
                </ProductPieces>

                <ProductBtn>
                <a href="https://www.youtube.com/watch?v=NFrWmxGl_Rc&t=2s&ab_channel=MiguelCuervo20" target="_blank">Ver video</a>
                </ProductBtn>

            </ProductDiv>
    );
}

export default SeventhProduct;