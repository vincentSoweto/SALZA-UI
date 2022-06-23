import { useRef, useState, useContext } from 'react';

import classes from '../assets/styles/AuthForm.module.css';
import AuthContext from '../store/auth-context';

const AuthForm = () => {
  const emailInputRef = useRef();
  const passwordRef = useRef();

  const authCtx = useContext(AuthContext)

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false)

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) =>{
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value
    const enteredPassword = passwordRef.current.value;

    //add Validation

    setIsLoading(true)
    let url = ''
    if(isLogin)
    {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAYj0eL5vdVksNnEXLvb6JVsX9bgAQysGg'

    }
    else
    { 
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAYj0eL5vdVksNnEXLvb6JVsX9bgAQysGg`
    }
      fetch(url,
      {
        method: 'POST' ,
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true
        }),
        headers:{
          'Content-Type': 'application/json'
        }
      }
      ).then((res) =>{
        setIsLoading(false)
        if(res.ok){
          return res.json()
        }else{
          return res.json().then((data )=>{
            //show error modal
            let errorMessage = 'Authentication failed'
            // if(data && data.error && data.error.message){
            //   errorMessage = data.error.message
            //  console.log(data) }
            throw new Error(errorMessage)
          });
        }
      }).then((data)=>{
        console.log(data)
        authCtx.login(data.idToken)
      }).catch((err)=>{
        alert(err.message)});
    
  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required ref={passwordRef} />
        </div>
        <div className={classes.actions}>
          {!isLoading && <button>{isLogin ? 'Login' : 'Create Account'}</button>}
          {isLoading && <p>Sending Request...</p>}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
