import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCategory } from '../../redux/categoriesSlice';
import { BorderDecoration, CardCategoria } from './CategoriasStyles';

export const Categoria = ({ title, category }) => {
  const selectedCategory = useSelector(
    state => state.categories.selectedCategory
  );

  const dispatch = useDispatch();

  return (
    <CardCategoria
      selected={category === selectedCategory}
      onClick={() => dispatch(selectCategory(category))}
      whileTap={{ scale: 0.95 }}
    >
      
      <h2>{title}</h2>
      <BorderDecoration></BorderDecoration>
    </CardCategoria>
  );
};

export default Categoria;