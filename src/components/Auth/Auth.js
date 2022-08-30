import React,{useContext} from 'react'
import './Auth.css'
import { AuthContext } from '../../context/auth-context'

const Auth = () => {
  const authContext = useContext(AuthContext)
  
  const loginHandler = () => {
    authContext.login()
  }
  
  return (
    <div className='login'>
        <h3>login page</h3>
        <button onClick={loginHandler}>login</button>
    </div>
  )
}

export default Auth