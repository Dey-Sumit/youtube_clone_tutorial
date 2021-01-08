import request from '../../api'
import {
   CHANNEL_VIDEOS_FAIL,
   CHANNEL_VIDEOS_REQUEST,
   CHANNEL_VIDEOS_SUCCESS,
   HOME_VIDEOS_FAILED,
   HOME_VIDEOS_REQUEST,
   HOME_VIDEOS_SUCCESS,
   RELATED_VIDEOS_FAIL,
   RELATED_VIDEOS_REQUEST,
   RELATED_VIDEOS_SUCCESS,
   SEARCH_VIDEOS_FAIL,
   SEARCH_VIDEOS_REQUEST,
   SEARCH_VIDEOS_SUCCESS,
   SELECTED_VIDEO_FAILED,
   SELECTED_VIDEO_REQUEST,
   SELECTED_VIDEO_SUCCESS,
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
            maxResults: 20,
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

export const getVideoById = videoId => async dispatch => {
   try {
      dispatch({
         type: SELECTED_VIDEO_REQUEST,
      })

      const { data } = await request('/videos', {
         params: {
            part: 'snippet,statistics',
            id: videoId,
         },
      })
      dispatch({
         type: SELECTED_VIDEO_SUCCESS,
         payload: data.items[0],
      })
   } catch (error) {
      console.log(error)
      console.log(error.message)
      dispatch({
         type: SELECTED_VIDEO_FAILED,
         payload: error.message,
      })
   }
}

export const getRelatedVideos = videoId => async dispatch => {
   dispatch({
      type: RELATED_VIDEOS_REQUEST,
   })
   try {
      const { data } = await request('/search', {
         params: {
            part: 'snippet',
            relatedToVideoId: videoId,
            type: 'video',
            maxResults: 15,
         },
      })
      dispatch({
         type: RELATED_VIDEOS_SUCCESS,
         payload: data.items,
      })
   } catch (error) {
      console.log(error.response.data.message)

      dispatch({
         type: RELATED_VIDEOS_FAIL,
         payload: error.response.data.message,
      })
   }
}

export const searchVideos = q => async (dispatch, getState) => {
   try {
      dispatch({
         type: SEARCH_VIDEOS_REQUEST,
      })

      const { data } = await request('/search', {
         params: {
            part: 'snippet',
            q,
            type: 'channel,video',
            maxResults: 20,
         },
         // headers: { Authorization: `Bearer ${getState().auth.accessToken}` },
      })

      dispatch({
         type: SEARCH_VIDEOS_SUCCESS,
         payload: data.items,
      })
   } catch (error) {
      console.log(error.response.data.message)
      dispatch({
         type: SEARCH_VIDEOS_FAIL,
         payload: error.response.data.message,
      })
   }
}

export const getVideoByChannel = id => async (dispatch, getState) => {
   dispatch({
      type: CHANNEL_VIDEOS_REQUEST,
   })

   console.log({ id })
   try {
      const {
         data: { items },
      } = await request('/channels', {
         params: {
            part: 'contentDetails',
            id: id,
            maxResults: 5,
         },
         //  headers: { Authorization: `Bearer ${getState()?.auth.accessToken}` },
      })

      const uploadsPlaylistId = items[0].contentDetails.relatedPlaylists.uploads

      // console.log(uploadsPlaylistId);

      const { data } = await request('/playlistItems', {
         params: {
            part: 'snippet,contentDetails',
            playlistId: uploadsPlaylistId,
            maxResults: 30,
         },
      })

      dispatch({
         type: CHANNEL_VIDEOS_SUCCESS,
         payload: data.items,
      })
   } catch (error) {
      dispatch({
         type: CHANNEL_VIDEOS_FAIL,
      })
      console.log(error)
   }
}
