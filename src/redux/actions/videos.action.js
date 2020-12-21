import request from '../../api'
import {
   HOME_VIDEOS_FAILED,
   HOME_VIDEOS_REQUEST,
   HOME_VIDEOS_SUCCESS,
} from '../actionTypes'

export const getPopularVideos = () => async (dispatch, getState) => {
   dispatch({
      type: HOME_VIDEOS_REQUEST,
   })
   try {
      const { data } = await request('/videos', {
         params: {
            part: 'snippet,contentDetails,statistics',
            chart: 'mostPopular',
            regionCode: 'IN',
            maxResults: 16,
            pageToken: getState().homeVideos.nextPageToken,
         },
         headers: { Authorization: `Bearer ${getState().auth.accessToken}` },
      })
      dispatch({
         type: HOME_VIDEOS_SUCCESS,
         payload: {
            videos: data.items,
            nextPageToken: data.nextPageToken,
            category: 'All',
         },
      })
   } catch (error) {
      console.log(error.message)
      dispatch({
         type: HOME_VIDEOS_FAILED,
         payload: error.message,
      })
   }
}

export const getVideosByCategory = q => async (dispatch, getState) => {
   try {
      dispatch({
         type: HOME_VIDEOS_REQUEST,
      })
      const { data } = await request('/search', {
         params: {
            part: 'snippet',
            q,
            type: 'video',
            maxResults: 16,
            pageToken: getState().homeVideos.nextPageToken,
         },
         headers: { Authorization: `Bearer ${getState()?.auth.accessToken}` },
      })

      dispatch({
         type: HOME_VIDEOS_SUCCESS,
         payload: {
            videos: data.items,
            nextPageToken: data.nextPageToken,
            category: q,
         },
      })
   } catch (error) {
      console.log(error)
      dispatch({
         type: HOME_VIDEOS_FAILED,
         payload: error.message,
      })
   }
}
