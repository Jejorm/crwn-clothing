import { useState } from 'react'
import { signInAuthUserWithEmailAndPassword, signInWithGooglePopUp } from '../../utils/firebase/firebase.utils'
import { Button, BUTTON_TYPE_CLASSES } from '../button/button.component'
import { FormInput } from '../form-input/form-input.component'

import { ButtonsContainer, SignInContainer } from './sign-in-form.styles'

const defaultFormFields = {
    email: '',
    password: '',
}

export const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields)

    const { email, password } = formFields

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

    const signInWithGoogle = async () => {

        await signInWithGooglePopUp()
    }

    const handleSubmit = async (event) => {

        event.preventDefault()

        try {

            const { user } = await signInAuthUserWithEmailAndPassword(email, password)

            resetFormFields()

        } catch (error) {

            switch(error.code) {

                case 'auth/wrong-password':
                    alert('Incorrect Password!')
                    break

                case 'auth/user-not-found':
                    alert('User not exists with this email')
                    break

                default:
                    console.log(error)
            }
        }
    }

    return (

        <SignInContainer> 

            <h2>Already have an account?</h2>

            <span>Sign In with your Email and Password</span>

            <form onSubmit={handleSubmit}>

                <FormInput type='email' name='email' value={email} autoComplete='off' onChange={handleChange} required label='Email' />

                <FormInput type='password' name='password' value={password} onChange={handleChange} required label='Password' />

                <ButtonsContainer>

                    <Button type='submit'>
                        Sign In
                    </Button>

                    <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>
                        Google Sign In
                    </Button>

                </ButtonsContainer>

            </form>

        </SignInContainer>
    )
}