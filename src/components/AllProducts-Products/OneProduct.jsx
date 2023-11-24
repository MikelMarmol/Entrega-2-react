import React from 'react'
import image from '../../assets/MostFeaturedProducts-Imgs/MINIATURA 56.jpg';
import {ProductDiv, ProductImg,  ProductPieces, ProductBtn} from '../../styles/AllProductsPageStyles'

const OneProduct = () => {
    return (
        <ProductDiv>  
                
                <ProductImg  
                src={image}
                alt="Daily Bugle (Spiderman)">
                </ProductImg>

                <ProductPieces>
                6 TRUCOS para subir a LIGA LEYENDA siendo TH BAJO 🔝🏆 - FÁCIL Y RAPIDO
                </ProductPieces>

                <ProductBtn>
                    <a href="https://www.youtube.com/watch?v=DHS1TZaibOU&ab_channel=MiguelCuervo20" target="_blank">Ver video</a>
                </ProductBtn>

            </ProductDiv>
    );
}

export default OneProduct;