import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { ProductCard } from '../../components/product-card/product-card.component'
import { selectCategoriesIsLoading, selectCategoriesMap } from '../../store/categories/categories.selector'

import { CategoryContainer, CategoryTitle } from './category-styles'
import { Spinner } from '../../components/spinner/spinner.component'

export const Category = () => {

    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading);

    const { category } = useParams()

    const [products, setProducts] = useState(categoriesMap[category])

    useEffect(() => {

        setProducts(categoriesMap[category])

    }, [categoriesMap, category])

    return (

        <>
            <CategoryTitle>{category.toUpperCase()}</CategoryTitle>

            {
                isLoading
                    ?
                        <Spinner />
                    :

                        <CategoryContainer>

                            {
                                products &&
                                    products.map(product => <ProductCard key={product.id} product={product} />)
                            }

                        </CategoryContainer>
            }

        </>
    )
}