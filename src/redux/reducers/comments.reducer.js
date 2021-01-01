import {
   CREATE_COMMENT_SUCCESS,
   CREATE_COMMENT_FAILED,
   CREATE_COMMENT_REQUEST,
   LIST_COMMENTS_SUCCESS,
   LIST_COMMENTS_FAIL,
} from '../actionTypes'

const initialState = {
   comments: null,
   loading: true,
   errors: null,
   totalComments: null,
}

export const commentsReducer = (state = initialState, action) => {
   const { type, payload } = action

   switch (type) {
      case LIST_COMMENTS_SUCCESS:
         console.log(payload)
         return {
            ...state,
            comments: payload.comments,
            totalComments: payload.totalComments,
         }

      case LIST_COMMENTS_FAIL:
         return {
            ...state,
            errors: payload,
         }

      default:
         return state
   }
}

// Not worth

export const createCommentReducer = (state = {}, action) => {
   const { type, payload } = action

   switch (type) {
      case CREATE_COMMENT_SUCCESS:
         return {
            ...state,
            success: true,
            loading: false,
         }

      case CREATE_COMMENT_FAILED:
         return {
            ...state,
            loading: true,
            errors: payload,
         }
      case CREATE_COMMENT_REQUEST:
         return {
            ...state,
            loading: true,
         }

      default:
         return state
   }
}
