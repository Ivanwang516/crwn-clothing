import './sign-in-form.styles.scss'

import FormInput from '../form-input/form-input.component'
import Button from '../button/button.components'

import { signInAuthUserWithEmailAndPassword,
     createUserDocmentFromAuth, 
     signInWithGooglePopup } from '../../utils/firebase/firebase.utils'

import { useState } from 'react'


const defaultFormFields = {
    email: '',
    password: ''
}

const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields)
    const { email, password } = formFields

    const signInWithGoogle = async() => {
        const { user } = await signInWithGooglePopup();
        await createUserDocmentFromAuth(user)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try{
            await signInAuthUserWithEmailAndPassword(email, password)
        }catch(error){
            switch(error.code) {
                case 'auth/wrong-password':
                    alert('password is incorrect')
                    break
                case 'auth/user-not-found':
                    alert('email address not registered')
                    break
                default:
                    console.log(error)
            }
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({ ...formFields, [name]:value })
    }

    return (
        <div className='sign-in-container'>
            <h2>Already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Email"
                type="email" 
                required 
                onChange={handleChange} 
                name="email" 
                value={email}/> 

                <FormInput
                label="Password"
                type="password"
                required
                onChange={handleChange}
                name="password"
                value={password} />

                <div className='buttons-container'>
                    <Button onClick={handleSubmit} type='submit'>Sign In</Button>
                    <Button type='button' onClick={signInWithGoogle}  buttonType='google'>Sign In Google</Button>
                </div>
            </form>
            
        </div>
    )
}

export default SignInForm