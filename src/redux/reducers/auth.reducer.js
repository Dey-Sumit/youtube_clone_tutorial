import {
   LOGIN_SUCCESS,
   LOGOUT,
   SET_PROFILE,
   LOGIN_REQUEST,
   LOGIN_FAIL,
} from '../actionTypes'

const initialState = {
   accessToken: sessionStorage.getItem('ytc-access-token')
      ? sessionStorage.getItem('ytc-access-token')
      : null,

   //    accessToken: null,
   user: null,
   loading: false,
}

export const authReducer = (state = initialState, action) => {
   const { type, payload } = action
   switch (type) {
      case LOGIN_REQUEST:
         return {
            ...state,
            loading: true,
         }

      case LOGIN_SUCCESS:
         return {
            ...state,
            // shift this to access creator
            accessToken: payload,
            loading: false,
         }
      case LOGIN_FAIL:
         return {
            ...state,
            loading: false,
            error: payload,
            accessToken: null,
         }
      case SET_PROFILE:
         return {
            ...state,
            user: payload,
         }

      case LOGOUT:
         localStorage.removeItem('ytc-access-token')
         return {
            ...state,
            accessToken: null,
            user: null,
         }
      default:
         return state
   }
}
