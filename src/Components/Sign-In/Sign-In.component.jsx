import React from 'react'
import CustomButton from '../Custom-Button/custom-button.component';
import FormInput from '../Form-Input/form-input';
import './Sign-In.styles.scss'
import {signInWithGoogle} from '../../firebase/firebase.util'
class SignIn extends React.Component {
    constructor(){
        super()

        this.state = {
            email:'',
            Password:''
        }
    }
    handleSubmit =(event)=>{
        event.preventDefault();
        this.setState({email:'',Password:''})
    }
    HandleChange= (event) =>{
        const {value,name}=event.target;
        this.setState({[name]:value})
    }

    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account </h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                    label='Email'
                    type="email" 
                    name='email' 
                    value={this.state.email} 
                    HandleChange={this.HandleChange} required
                    />

                    <FormInput                  
                    label='Password'
                    type="password"
                    name='password'
                    value={this.state.Password} 
                    HandleChange={this.HandleChange} required
                    />
                   <CustomButton  type='submit'>Sign In</CustomButton>
                   <CustomButton  onClick={signInWithGoogle} isGoogleSignIn>
                       Sign In With Google  
                       </CustomButton>

                </form>

            </div>
        )
    }
}

export default SignIn