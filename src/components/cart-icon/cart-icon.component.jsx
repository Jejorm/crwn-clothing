import { useContext } from 'react'

import { CartContext } from '../../contexts/cart.context'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

import './cart-icon.styles.scss'

export const CartIcon = () => {

    const { setIsCartOpen } = useContext(CartContext)

    return (

        <div className='cart-icon-container' onClick={() => setIsCartOpen(prev => !prev)}>

            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>12</span>

        </div>
    )
}