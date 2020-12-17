import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { login } from '../../redux/actions/auth.action'
import './loginScreen.scss'
const LoginScreen = () => {
   const dispatch = useDispatch()
   const accessToken = useSelector(state => state.auth.accessToken)

   const history = useHistory()

   useEffect(() => {
      if (accessToken) history.push('/')
   }, [history, accessToken])

   const handleLogin = () => {
      dispatch(login())
   }
   console.log('/auth')
   return (
      <div className='login__container'>
         <div className='login'>
            <img
               src='https://seeklogo.com/images/Y/youtube-logo-FF3BEE4378-seeklogo.com.png'
               alt='yt-logo'
            />
            <h2 className='mb-4'>Youtube Clone</h2>

            <button onClick={handleLogin}>Login With Google</button>

            <p className='my-2'>A Youtube clone project using Youtube-api</p>
         </div>
      </div>
   )
}

export default LoginScreen
