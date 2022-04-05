// import { useEffect } from 'react'
// import { getRedirectResult } from 'firebase/auth'

import './authentication.styles.scss'
import { 
    // auth,
    createUserDocmentFromAuth, 
    signInWithGooglePopup,
    // signInWithGoogleRedirect 
} from '../../utils/firebase/firebase.utils'

import SignUpForm from '../../components/sign-up-form/sign-up-form.component'
import SignInForm from '../../components/sign-in-form/sign-in-form.components'

const Authentication = () => {
    // useEffect(async () => {
    //     const response = await getRedirectResult(auth)
    //     console.log(response)
    //     if (response) {
    //         const userDocRef = await createUserDocmentFromAuth(response.user)
    //     }
    // },[])

    return(
        <div className='authentication-container'>
            <SignInForm />
            <SignUpForm />
        </div>
    )
}

export default Authentication