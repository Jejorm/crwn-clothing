import { useState } from 'react'
import { createAuthUserWIthEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'
import { Button } from '../button/button.component'
import { FormInput } from '../form-input/form-input.component'

import './sign-up.styles.scss'

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

export const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields)

    const { displayName, email, password, confirmPassword } = formFields

    const handleChange = event => {

        const { name, value } = event.target

        setFormFields({
            ...formFields,
            [name]: value
        })
    }

    const resetFormFields = () => {

        setFormFields(defaultFormFields)
    }

    const handleSubmit = async (event) => {

        event.preventDefault()

        if (password !== confirmPassword) {

            console.log('Password Different')
            return
        }

        try {

            const { user } = await createAuthUserWIthEmailAndPassword(email, password)

            await createUserDocumentFromAuth(user, { displayName }) 

            resetFormFields()

        } catch (error) {

            switch(error.code) {

                case 'auth/weak-password':
                    alert('Password should be at least 6 characters')

                default:
                    console.log(error)
            }

        }
    }

    return (

        <div className='sign-up-container' > 

            <h2>Don't have an account?</h2>

            <span>Sign Up with your Email and Password</span>

            <form onSubmit={handleSubmit}>

                <FormInput type='text' name='displayName' value={displayName} onChange={handleChange} required label='Display Name' />

                <FormInput type='email' name='email' value={email} onChange={handleChange} required label='Email' />

                <FormInput type='password' name='password' value={password} onChange={handleChange} required label='Password' />

                <FormInput type='password' name='confirmPassword' value={confirmPassword} onChange={handleChange} required label='Confirm Password' />

                <Button type='submit'>
                    Sign Up
                </Button>

            </form>

        </div>
    )
}