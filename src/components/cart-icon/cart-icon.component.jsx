import { useContext } from 'react'

import { CartContext } from '../../contexts/cart.context'

import { CartIconContainer, ItemCount, ShoppingIcon } from './cart-icon.styles'

export const CartIcon = () => {

    const handleCartOpen = () => setIsCartOpen(prev => !prev)

    const { cartCount, setIsCartOpen } = useContext(CartContext)

    return (

        <CartIconContainer onClick={handleCartOpen}>

            <ShoppingIcon />

            <ItemCount>
                {cartCount}
            </ItemCount>

        </CartIconContainer>
    )
}
