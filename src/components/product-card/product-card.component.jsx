import { useContext } from 'react'

import { CartContext } from '../../contexts/cart.context'
import { Button } from '../button/button.component'

import './product-card.styles.scss'

export const ProductCard = ({ product }) => {

    const { addItemToCart } = useContext(CartContext)

    const { name, price, imageUrl } = product

    const addProductToCart = () => addItemToCart(product)

    return (

        <div className='product-card-container'>

            <img src={imageUrl} alt={name} />

            <footer className='footer'>

                <span className='name'>{name}</span>
                <span className='price'>{price}</span>

            </footer>

            <Button
                buttonType='inverted'
                onClick={addProductToCart}
            >
                Add To Cart
            </Button>

        </div>
    )
}