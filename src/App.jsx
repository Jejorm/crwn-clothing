import { Route, Routes } from 'react-router-dom'

import { Navigation } from './routes/navigation/navigation.component'
import { Home } from './routes/home/home.component'
import { Authentication } from './routes/authentication/authentication.component'

export const App = () => {

    return (
        
        <Routes>

            <Route path='/' element={<Navigation />}>

                <Route index element={<Home />} />

                <Route path='shop' element={<h1>Hello</h1>} />

                <Route path='auth' element={<Authentication />} />

            </Route>

        </Routes>
    )
}