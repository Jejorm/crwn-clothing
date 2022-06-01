import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { signOutUser } from '../../utils/firebase/firebase.utils'
import { CartIcon } from '../../components/cart-icon/cart-icon.component'
import { CartDropdown } from '../../components/cart-dropdown/cart-dropdown.component'
import { selectIsCartOpen } from '../../store/cart/cart.selector'
import { selectCurrentUser } from '../../store/user/user.selector'

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import { LogoContainer, NavCustomLink, NavigationContainer, NavLinks } from './navigation.styles'


export const Navigation = () => {

    const currentUser = useSelector(selectCurrentUser);
    const isCartOpen = useSelector(selectIsCartOpen)

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
