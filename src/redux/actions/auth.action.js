import firebase from 'firebase/app'
import auth from '../../firebase'
import {
   LOGIN_FAIL,
   LOGIN_REQUEST,
   LOGIN_SUCCESS,
   LOGOUT,
   SET_PROFILE,
} from '../actionTypes'
import axios from 'axios'

export const login = () => async dispatch => {
   try {
      const provider = new firebase.auth.GoogleAuthProvider()
      provider.addScope('https://www.googleapis.com/auth/youtube.force-ssl')

      const res = await auth.signInWithPopup(provider)
      console.log(res)
      dispatch({
         type: LOGIN_REQUEST,
      })
      const accessToken = res.credential.accessToken
      const profile = {
         name: res.additionalUserInfo.profile.name,
         photoURL: res.additionalUserInfo.profile.photoURL,
      }
      console.log(profile)
      dispatch({
         type: LOGIN_SUCCESS,
         payload: accessToken,
      })

      dispatch({
         type: SET_PROFILE,
         payload: profile,
      })
      sessionStorage.setItem('ytc-access-token', accessToken)
   } catch (error) {
      console.log(error)
      dispatch({
         type: LOGIN_FAIL,
         payload: error.message,
      })
   }
}
export const load_user = () => async dispatch => {
   auth.onAuthStateChanged(async user => {
      if (user) {
         dispatch({
            type: LOGIN_REQUEST,
         })
         console.log(user)
         try {
            const accessToken = await user.getIdToken()

            axios('https://accounts.google.com/o/oauth2/v2/auth', {
               params: {
                  grant_type: 'authorization_code',
                  code: accessToken,
               },
            })
            const profile = {
               name: user.displayName,
               photoURL: user.photoURL,
            }
            dispatch({
               type: LOGIN_SUCCESS,
               payload: accessToken,
            })

            dispatch({
               type: SET_PROFILE,
               payload: profile,
            })

            localStorage.setItem('ytc-access-token', accessToken)
         } catch (error) {
            console.log(error)
         }
      } else {
         dispatch({
            type: LOGIN_FAIL,
            payload: 'not logged in',
         })
      }
   })
}

export const logout = () => async dispatch => {
   await auth.signOut()
   dispatch({
      type: LOGOUT,
   })
}
