import { Link, Outlet } from 'react-router-dom'

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import './navigation.styles.scss'

export const Navigation = () => {

    return (

        <>

            <div className='navigation'>

                <Link className='logo-container' to='/'>

                    <CrwnLogo />

                </Link>

                <div className='nav-links-container'>

                    <Link className='nav-link' to='/shop'>
                        Shop
                    </Link>

                    <Link className='nav-link' to='/auth'>
                        Sign In
                    </Link>

                </div>

            </div>

            <Outlet />

        </>
    )
}
