import React from 'react'
import SignIn from '../../../Components/Sign-In/Sign-In.component'
import SignUp from '../../../Components/SignUp/SignUp.component'
import './Sign-in-Sign-up.styles.scss'

const SignInSignUpPage = ()=>(
    <div className='SignInSignUp'>
        <SignIn/>
        <SignUp/>
    </div>
) 
export default SignInSignUpPage