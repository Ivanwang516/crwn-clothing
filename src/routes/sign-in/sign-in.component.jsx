import './sign-in.styles.scss'
import { signInWithGooglePopup } from '../../utils/firebase/firebase.utils'

const SignIn = () => {
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        console.log(response)
    }
    return(
        <div>
            <button onClick={logGoogleUser}>
                log in with Google
            </button>
        </div>
    )
}

export default SignIn