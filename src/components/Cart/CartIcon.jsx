import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { FaShoppingCart } from 'react-icons/fa';

import { LinkContainerStyled } from '../../styles/NavBarStyles';
import { toggleHiddenCart } from '../../redux/cartSlice';

const CartIcon = () => {
  const totalCartItems = useSelector(state => state.cart.cartItems).reduce(
    (acc, item) => (acc += item.quantity),
    0
  );

  const dispatch = useDispatch();

  return (
    <LinkContainerStyled
      onClick={() => dispatch(toggleHiddenCart())}
    >
      <FaShoppingCart />
      <span>{totalCartItems}</span>
    </LinkContainerStyled>
  );
};

export default CartIcon;