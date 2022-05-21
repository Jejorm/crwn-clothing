import { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ProductCard } from '../../components/product-card/product-card.component'
import { CategoriesContext } from '../../contexts/categories.context'

import { CategoryContainer, CategoryTitle } from './category-styles'

export const Category = () => {

    const { categoriesMap } = useContext(CategoriesContext)

    const { category } = useParams()

    const [products, setProducts] = useState(categoriesMap[category])

    useEffect(() => {

        setProducts(categoriesMap[category])

    }, [categoriesMap, category])

    return (

        <>
            <CategoryTitle>{category.toUpperCase()}</CategoryTitle>

            <CategoryContainer>

                {
                    products &&
                        products.map(product => <ProductCard key={product.id} product={product} />)
                }

            </CategoryContainer>
        </>
    )
}