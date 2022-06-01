import { useDispatch, useSelector } from 'react-redux'

import { selectIsCartOpen, selectCartCount } from '../../store/cart/cart.selector'
import { setIsCartOpen } from '../../store/cart/cart.action'

import { CartIconContainer, ItemCount, ShoppingIcon } from './cart-icon.styles'

export const CartIcon = () => {

    const isCartOpen = useSelector(selectIsCartOpen);
    const cartCount = useSelector(selectCartCount);

    const dispatch = useDispatch();

    const handleCartOpen = () => dispatch(setIsCartOpen(!isCartOpen))

    return (

        <CartIconContainer onClick={handleCartOpen}>

            <ShoppingIcon />

            <ItemCount>
                {cartCount}
            </ItemCount>

        </CartIconContainer>
    )
}
