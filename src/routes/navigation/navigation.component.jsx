import { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'

import { signOutUser } from '../../utils/firebase/firebase.utils'
import { UserContext } from '../../contexts/user.context'
import { CartIcon } from '../../components/cart-icon/cart-icon.component'
import { CartDropdown } from '../../components/cart-dropdown/cart-dropdown.component'
import { CartContext } from '../../contexts/cart.context'
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'

import { LogoContainer, NavCustomLink, NavigationContainer, NavLinks } from './navigation.styles'


export const Navigation = () => {

    const { currentUser } = useContext(UserContext)
    const { isCartOpen } = useContext(CartContext)

    return (

        <>

            <NavigationContainer>

                <LogoContainer to='/'>

                    <CrwnLogo />

                </LogoContainer>

                <NavLinks>

                    <NavCustomLink to='/shop'>
                        Shop
                    </NavCustomLink>

                    {
                        currentUser
                            ? (
                                <NavCustomLink as='span' onClick={signOutUser}>
                                    SIGN OUT
                                </NavCustomLink>
                            )
                            : (
                                <NavCustomLink to='/auth'>
                                    SIGN IN
                                </NavCustomLink>
                            )
                    }

                    <CartIcon />

                </NavLinks>

                { isCartOpen && <CartDropdown /> }

            </NavigationContainer>

            <Outlet />

        </>
    )
}
