import React from 'react'
import {Link} from 'react-router-dom'
import {auth} from '../../firebase/firebase.util'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import './header-styles.scss'
const Header =({currentUser}) =>(
    <div className='header'>
        {/* //click logo for navigate to Homepage */}
        <Link to="/" className='logo-container'>
            <Logo className='logo'/>
        </Link>

        <div className='options'>
            <Link to='/shop' className='option'>
                SHOP
            </Link>

            <Link to='/shop'>
                CONTACT
            </Link>
            {
                currentUser ? 
                <div className='option' onClick={()=> auth.signOut()}>
                    SIGN OUT
                </div>
                :
                <Link className='option' to='/Signin'>
                    SIGN IN

                </Link>
            }

        </div>
    </div>
)

export default Header