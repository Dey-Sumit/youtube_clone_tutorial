import {
   CHANNEL_DETAILS_FAIL,
   CHANNEL_DETAILS_REQUEST,
   CHANNEL_DETAILS_SUCCESS,
   CHANNEL_SUBSCRIPTION_STATUS,
   SUBSCRIPTIONS_VIDEOS_FAILED,
   SUBSCRIPTIONS_VIDEOS_REQUEST,
   SUBSCRIPTIONS_VIDEOS_SUCCESS,
} from '../actionTypes'

export const channelDetailsReducer = (
   state = { channel: {}, loading: true, subscriptionStatus: null },
   action
) => {
   const { type, payload } = action

   switch (type) {
      case CHANNEL_DETAILS_REQUEST:
         return {
            ...state,
            loading: true,
         }
      case CHANNEL_DETAILS_SUCCESS:
         return {
            ...state,
            loading: false,
            channel: payload,
            success: true,
         }
      case CHANNEL_DETAILS_FAIL:
         return {
            ...state,
            loading: false,
            error: payload,
            success: false,
         }
      case CHANNEL_SUBSCRIPTION_STATUS:
         return {
            ...state,
            subscriptionStatus: payload,
         }

      default:
         return state
   }
}

export const subscriptionsVideosReducer = (
   state = { loading: true, videos: [] },
   action
) => {
   const { type, payload } = action

   switch (type) {
      case SUBSCRIPTIONS_VIDEOS_REQUEST:
         return {
            ...state,
            loading: true,
         }

      case SUBSCRIPTIONS_VIDEOS_SUCCESS:
         return {
            ...state,
            videos: payload,
            loading: false,
            error: null,
         }

      case SUBSCRIPTIONS_VIDEOS_FAILED:
         return {
            ...state,
            loading: false,
            error: payload,
         }

      default:
         return state
   }
}
