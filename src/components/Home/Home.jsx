import React, { useRef } from 'react';

import CardsProductos from '../../components/Productos/CardsProductos';


import {
  HomeWrapper,
  ProductosWrapper,
} from './HomeStyles';

function Home() {
  const productsRef = useRef();

  const doScroll = () => {
    window.scrollTo(
      productsRef.current.getBoundingClientRect().x,
      productsRef.current.getBoundingClientRect().y
    );
  };

  return (
    <HomeWrapper>

      {/* Populares Section*/}
      <ProductosWrapper ref={productsRef}>
        <h2>Nuestros Planes</h2>
        <CardsProductos />
      </ProductosWrapper>
    </HomeWrapper>
  );
}

export default Home;