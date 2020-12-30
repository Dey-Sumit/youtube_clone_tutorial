import {
   CHANNEL_DETAILS_REQUEST,
   CHANNEL_DETAILS_SUCCESS,
   CHANNEL_DETAILS_FAIL,
   CHANNEL_SUBSCRIPTION_STATUS,
} from '../actionTypes'

import request from '../../api'

export const getChannelDetails = id => async dispatch => {
   try {
      dispatch({
         type: CHANNEL_DETAILS_REQUEST,
      })

      const { data } = await request('/channels', {
         params: {
            part: 'snippet,contentDetails,statistics',
            id: id,
         },
         // headers: { Authorization: `Bearer ${getState()?.auth.accessToken}` },
      })
      dispatch({
         type: CHANNEL_DETAILS_SUCCESS,
         payload: data.items[0],
      })
   } catch (error) {
      console.log(error.code)
      console.log(error.message)
      dispatch({
         type: CHANNEL_DETAILS_FAIL,
         payload: error.message,
      })
   }
}

export const checkSubscriptionStatus = channelId => async (
   dispatch,
   getState
) => {
   try {
      const { data } = await request('/subscriptions', {
         params: {
            part: 'snippet',
            forChannelId: channelId,
            mine: true,
         },
         headers: { Authorization: `Bearer ${getState().auth.accessToken}` },
      })
      // console.log(data);
      // if(data.items.length === 0)
      //     return false
      // return true
      dispatch({
         type: CHANNEL_SUBSCRIPTION_STATUS,
         payload: data.items.length !== 0,
      })

      //TODO TYPE SET_SUBSCRIPTION_STATUS
   } catch (error) {
      console.log(error.code)
      console.log(error.message)
      // dispatch({
      //     type: SET_VIDEOS_ERRORS,
      //     payload: error.message
      // })
   }
}
