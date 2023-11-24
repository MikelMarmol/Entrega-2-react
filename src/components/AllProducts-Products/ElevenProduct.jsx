import React from 'react'
import ThirdImage from '../../assets/MostFeaturedProducts-Imgs/MINIATURA 58.jpg';
import {ProductDiv, ProductImg, ProductPieces, ProductBtn} from '../../styles/AllProductsPageStyles'

const ElevenProduct = () => {
    return (
        <ProductDiv>  
                
                <ProductImg  
                src={ThirdImage}
                alt="Up House">
                </ProductImg>

                <ProductPieces>
                SUPER BRUJAS el mejor ejercito TERRESTRE para TH13 🏛️⭐ - Muy fácil de usar
                </ProductPieces>

                <ProductBtn>
                <a href="https://www.youtube.com/watch?v=Hsxtcb7_Xnk&t=76s&ab_channel=MiguelCuervo20" target="_blank">Ver video</a>
                </ProductBtn>

            </ProductDiv>
    );
}

export default ElevenProduct;