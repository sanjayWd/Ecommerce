import React from 'react'
import CustomButton from '../Custom-Button/custom-button.component';
import FormInput from '../Form-Input/form-input';
import './Sign-In.styles.scss'
import {auth,signInWithGoogle} from '../../firebase/firebase.util'
class SignIn extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            email:'',
            password:''
        }
    }
    handleSubmit =async(event)=>{
        event.preventDefault();
        const {email,password}= this.state  

        try{
            await auth.signInWithEmailAndPassword(email,password)    
            this.setState({email:'',password:''})
        }catch(error){
            console.log(error);

        }

        
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
                    label='email'
                    type='email' 
                    HandleChange={this.HandleChange} 
                    value={this.state.email} 
                    name='email'
                    required
                    />

                    {/* <FormInput                  
                    label='password'
                    type='password'
                    HandleChange={this.HandleChange}
                    value={this.state.password} 
                    required
                    /> */}

                    <FormInput
                    name='password'
                    type='password'
                    value={this.state.password}
                    HandleChange={this.HandleChange}
                    label='password'
                    required
                    />
                  <div className='buttons'>
                  <CustomButton  type='submit'>Sign In</CustomButton>
                   <CustomButton  onClick={signInWithGoogle} isGoogleSignIn>
                       Sign In With Google  
                    </CustomButton>
                  </div>

                </form>

            </div>
        )
    }
}

export default SignIn