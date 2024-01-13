import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { INITIAL_LIMIT } from '../../utils';

import CardProducto from './CardProducto';


import { ProductosContainer } from './CardsProductosStyles';


const CardsProductos = () => {
  const [limit, setLimit] = useState(INITIAL_LIMIT);

  let products = useSelector(state => state.products.products);
  const selectedCategory = useSelector(
    state => state.categories.selectedCategory
  );

  const totalProducts = useSelector(state => state.products.totalProducts);

  if (selectedCategory) {
    products = { [selectedCategory]: products[selectedCategory] };
  }

  useEffect(() => setLimit(INITIAL_LIMIT), [selectedCategory]);

  return (
    <>
      <ProductosContainer>
        {Object.entries(products).map(([, foods]) =>
          foods.map(food => {
            if (limit >= food.id || selectedCategory) {
              return <CardProducto key={food.id} {...food} />;
            }
            return null;
          })
        )}
      </ProductosContainer>
    </>
  );
};

export default CardsProductos;