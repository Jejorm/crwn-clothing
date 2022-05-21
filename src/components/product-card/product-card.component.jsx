import { useContext } from 'react'

import { CartContext } from '../../contexts/cart.context'
import { Button, BUTTON_TYPE_CLASSES } from '../button/button.component'

import { Footer, Name, Price, ProductStyledContainer } from './product-card.styles'

export const ProductCard = ({ product }) => {

    const { addItemToCart } = useContext(CartContext)

    const { name, price, imageUrl } = product

    const addProductToCart = () => addItemToCart(product)

    return (

        <ProductStyledContainer>

            <img src={imageUrl} alt={name} />

            <Footer>

                <Name>{name}</Name>
                <Price>{price}</Price>

            </Footer>

            <Button
                buttonType={BUTTON_TYPE_CLASSES.inverted}
                onClick={addProductToCart}
            >
                Add To Cart
            </Button>

        </ProductStyledContainer>
    )
}