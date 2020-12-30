import {
   HOME_VIDEOS_FAILED,
   HOME_VIDEOS_REQUEST,
   HOME_VIDEOS_SUCCESS,
   SELECTED_VIDEO_FAILED,
   SELECTED_VIDEO_REQUEST,
   SELECTED_VIDEO_SUCCESS,
} from '../actionTypes'

export const homeVideosReducer = (
   state = {
      videos: [],
      loading: false,
      nextPageToken: null,
      activeCategory: 'All',
   },
   action
) => {
   const { type, payload } = action

   switch (type) {
      case HOME_VIDEOS_REQUEST:
         return {
            ...state,
            loading: true,
         }
      case HOME_VIDEOS_SUCCESS:
         console.log({ payload, active: state.activeCategory })
         return {
            ...state,
            //videos: payload.videos,
            videos:
               payload.category === state.activeCategory
                  ? [...state.videos, ...payload.videos]
                  : payload.videos,

            nextPageToken: payload.nextPageToken,
            loading: false,
            activeCategory: payload.category,
         }

      case HOME_VIDEOS_FAILED:
         return {
            ...state,
            errors: payload,
            loading: false,
         }

      default:
         return state
   }
}

export const selectedVideoReducer = (
   state = { loading: true, video: null },
   action
) => {
   const { type, payload } = action

   switch (type) {
      case SELECTED_VIDEO_SUCCESS:
         return {
            ...state,
            video: payload,
            loading: false,
         }

      case SELECTED_VIDEO_REQUEST:
         return {
            ...state,
            loading: true,
         }

      case SELECTED_VIDEO_FAILED:
         return {
            ...state,
            loading: false,
            error: payload,
         }

      default:
         return state
   }
}
