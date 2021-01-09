import request from '../../api'

import {
   CREATE_COMMENT_FAILED,
   CREATE_COMMENT_REQUEST,
   CREATE_COMMENT_SUCCESS,
   LIST_COMMENTS_SUCCESS,
   LIST_COMMENTS_FAIL,
} from '../actionTypes'

export const getCommentsOfVideoById = videoId => async dispatch => {
   try {
      const { data } = await request('/commentThreads', {
         params: {
            part: 'snippet',
            videoId: videoId,
         },
      })
      console.log(data.pageInfo)
      dispatch({
         type: LIST_COMMENTS_SUCCESS,
         payload: {
            comments: data.items,
            totalComments: data.pageInfo.totalResults,
         },
      })
   } catch (error) {
      console.log(error.response.data)
      dispatch({
         type: LIST_COMMENTS_FAIL,
         payload: error.response.data,
      })
   }
}

export const addComment = (id, text) => async (dispatch, getState) => {
   dispatch({
      type: CREATE_COMMENT_REQUEST,
   })
   const obj = {
      snippet: {
         videoId: id,
         topLevelComment: {
            snippet: {
               textOriginal: text,
            },
         },
      },
   }
   try {
      await request.post('/commentThreads', obj, {
         params: {
            part: 'snippet',
         },
         headers: { Authorization: `Bearer ${getState().auth.accessToken}` },
      })
      dispatch({
         type: CREATE_COMMENT_SUCCESS,
      })

      //TODO loadComments()
      setTimeout(() => {
         dispatch(getCommentsOfVideoById(id))
      }, 2000)
   } catch (error) {
      console.log(error.response.data)
      dispatch({
         type: CREATE_COMMENT_FAILED,
         payload: error.message,
      })
   }
}
