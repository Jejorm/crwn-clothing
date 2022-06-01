import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { selectCartItems } from '../../store/cart/cart.selector'
import { Button } from '../button/button.component'
import { CartItem } from '../cart-item/cart-item.component'
import { CartDropdownContainer, CartItems, EmptyMessage } from './cart-dropdown.styles'

export const CartDropdown = () => {

    const cartItems = useSelector(selectCartItems);

    const navigate = useNavigate()

    const goToCheckoutHandler = () => {
        navigate('/checkout')
    }

    return (

        <CartDropdownContainer>

            <CartItems>

                {
                    cartItems.length
                        ?
                            cartItems.map(item => (
                                <CartItem key={item.id} cartItem={item} />
                            ))
                        :
                            <EmptyMessage>Your Cart is Empty</EmptyMessage>
                }

            </CartItems>

            <Button onClick={goToCheckoutHandler}>Go To Checkout</Button>

        </CartDropdownContainer>
    )
}