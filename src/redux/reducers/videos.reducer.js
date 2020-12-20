import {
   HOME_VIDEOS_FAILED,
   HOME_VIDEOS_REQUEST,
   HOME_VIDEOS_SUCCESS,
} from '../actionTypes'

// const initialState = {
//    videos: [],
//    loading: false,
//    nextPageToken: null,
//    activeCategory: 'All',
//    previousCategory: 'All',
// }

export const homeVideosReducer = (
   state = {
      videos: [],
      loading: false,
      nextPageToken: null,
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
         return {
            ...state,
            videos: [...state.videos, ...payload.videos],

            // videos:
            //    payload.category === state.previousCategory
            //       ? [...state.videos, ...payload.videos]
            //       : payload.videos,
            nextPageToken: payload.nextPageToken,
            loading: false,
         }

      case HOME_VIDEOS_FAILED:
         return {
            ...state,
            errors: payload,
            loading: false,
         }

      //   case SET_ACTIVE_CATEGORY: {
      //      return {
      //         ...state,
      //         previousCategory: state.activeCategory,
      //         activeCategory: payload,
      //      }
      //   }

      default:
         return state
   }
}
