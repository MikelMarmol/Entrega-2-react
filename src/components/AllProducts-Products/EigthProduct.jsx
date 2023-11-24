import React from 'react'
import image from '../../assets/MostFeaturedProducts-Imgs/MINIATURA 48.jpg';
import {ProductDiv, ProductImg, ProductPieces, ProductBtn} from '../../styles/AllProductsPageStyles'

const EightProduct = () => {
    return (
        <ProductDiv>  
        
                <ProductImg  
                src={image}
                alt="Piranha (Mario Bros)">
                </ProductImg>

                <ProductPieces>
                ¿QUE ESTA PASANDO CON LOS ALMACENES de ELIXIR ÁCIDO? 🎃Clash-o-ween 💀
                </ProductPieces>

                <ProductBtn>
                <a href="https://www.youtube.com/watch?v=fVNHgyxuli8&t=20s&ab_channel=MiguelCuervo20" target="_blank">Ver video</a>
                </ProductBtn>

            </ProductDiv>
    );
}

export default EightProduct;