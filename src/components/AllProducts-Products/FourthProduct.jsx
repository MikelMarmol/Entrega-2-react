import React from 'react'
import FourthImage from '../../assets/MostFeaturedProducts-Imgs/MINIATURA 49.jpg';
import {ProductDiv, ProductImg, ProductPieces, ProductBtn} from '../../styles/AllProductsPageStyles'

const FourthProduct = () => {
    return (
        <ProductDiv>  
                
                <ProductImg  
                src={FourthImage}
                alt="Jazz Club">
                </ProductImg>

                <ProductPieces>
                USO la PEOR TROPA DEL EVENTO de Halloween 🎃 MAGO-MONTAPUERCO 🐖🧙‍♂️
                </ProductPieces>

                <ProductBtn>
                <a href="https://www.youtube.com/watch?v=_G8dRdO4pRE&t=11s&ab_channel=MiguelCuervo20" target="_blank">Ver video</a>
                </ProductBtn>

            </ProductDiv>
    );
}

export default FourthProduct;