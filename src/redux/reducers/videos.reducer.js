import {
   HOME_VIDEOS_FAILED,
   HOME_VIDEOS_REQUEST,
   HOME_VIDEOS_SUCCESS,
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
