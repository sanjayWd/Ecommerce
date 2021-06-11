// import logo from './logo.svg';
import React from 'react';
import './App.css';
import {Route, Switch}from 'react-router-dom'
import Homepage from './Pages/homepage/hompage';
import ShopPage from './Pages/homepage/Shop/Shop.Component';
import Header from './Components/Header/header-component';
import SignInSignUpPage from './Pages/homepage/Sign-in-Sign-up/Sign-in-Sign-up.component';
import {auth,CreateUserProfileDocument} from './firebase/firebase.util'



class App extends React.Component {
  constructor(){
    super()

    this.state ={
      currentUser:null
    }
  }

  unsubscribeFromAuth=null
  componentDidMount(){
    this.unsubscribeFromAuth=auth.onAuthStateChanged( async userAuth =>{
      // this.setState({currentUser:user})
      if(userAuth){
        const userRef =await CreateUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser:{
              id:snapShot.id,
              ...snapShot.data()

            }
          },()=>{
            // console.log(this.state)
          })
        })
      
      }
      this.setState({currentUser:userAuth})
   
    })
  }
  // componentWillMount(){
  //   this.unsubscribeFromAuth();
  // }
  render(){
  return (
    <div className="App">   
   
    <Header currentUser={this.state.currentUser}/>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route path='/Signin' component={SignInSignUpPage}/>
        {/* <Route path='/Jacket' component={Jackets}/> */}
      </Switch>
  
    </div>
  );
}
 }

export default App;
